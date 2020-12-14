import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';
import { ICourse } from 'src/app/models/course.model';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  get courseName(): string {
    return this.courseData && this.courseData.title ? this.courseData.title : '';
  }

  public courseData: ICourse;
  private destroy$ = new Subject();

  constructor(
    private coursesService: CoursesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap(params => params.getAll('id')),
        takeUntil(this.destroy$)
      )
      .subscribe(courseId => this.getCourseData(courseId));
  }

  private getCourseData(courseId: string): void {
    this.coursesService
      .getCourseById(courseId)
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => this.courseData = res);
  }

}
