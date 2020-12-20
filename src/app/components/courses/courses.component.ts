import { Component, OnInit, OnDestroy } from '@angular/core';
import { ICourse, CoursesFakeData, ICoursesParams } from 'src/app/models/course.model';
import { FilterPipe } from '../../pipes/filter.pipe';
import { CoursesService } from 'src/app/services/courses.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit, OnDestroy {

  public courses: ICourse[] = [];
  public searchValue: string;
  private destroy$ = new Subject();

  private params: ICoursesParams;

  constructor(
    private filterPipe: FilterPipe,
    private coursesService: CoursesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.params = {
      count: 10,
      start: 0,
      textFragment: ''
    };

    this.getCourses(this.params);

    this.coursesService
      .addCourse$
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => this.getCourses(this.params));

    this.coursesService
      .updateCourse$
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => this.getCourses(this.params));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSearch(searchValue: string): void {
    this.params.textFragment = searchValue;
    this.getCourses(this.params);
  }

  onAddCourse(isAddCourse: boolean): void {
    if (isAddCourse) {
      this.router.navigate(['new'], {relativeTo: this.activatedRoute});
    }
  }

  onEditCourse(movieId: string): void {
    if (movieId) {
      this.router.navigate(['courses', movieId]);
    }
  }

  onDeleteCourse(courseId: string): void {
    this.coursesService
      .removeCourse(courseId)
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => this.courses = this.courses.filter(course => course.id !== Number(courseId)));
  }

  onLoadMore(isLoadMore: boolean): void {
    if (isLoadMore) {
      this.params.start = this.courses.length;
      this.getCourses(this.params);
    }
  }

  private getCourses(params: ICoursesParams): void {
    this.coursesService
      .getCourses(params)
      .pipe(takeUntil(this.destroy$))
      .subscribe(courses => this.courses = courses);
  }

}
