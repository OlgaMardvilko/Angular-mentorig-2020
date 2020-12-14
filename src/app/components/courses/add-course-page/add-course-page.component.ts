import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CoursesService } from 'src/app/services/courses.service';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ICourse } from 'src/app/models/course.model';

@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.scss']
})
export class AddCoursePageComponent implements OnInit, OnDestroy {

  public addCourseForm: FormGroup;
  public courseId: string;
  public courseData: ICourse;
  private destroy$ = new Subject();

  get formAction(): string {
    return this.courseId ? 'Edit course' : 'Add course';
  }

  constructor(
    private fb: FormBuilder,
    private coursesService: CoursesService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap(params => params.getAll('id')),
        takeUntil(this.destroy$)
      )
      .subscribe(data => {
        this.courseId = data;
        this.getCourseData(this.courseId);
      });

    this.createAddCourseForm();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  addCourse(): void {
    const formValue = this.addCourseForm.value;
    const courseId = this.courseId ? this.courseId : '11';

    const courseData = {
      id: courseId,
      ...formValue
    };

    this.courseId
      ? this.coursesService.updateCourse(courseData)
      : this.coursesService.createCourse(courseData);

    this.router.navigate(['courses']);
  }

  onCancel(): void {
    this.addCourseForm.reset();
  }

  private getCourseData(courseId: string): void {
    this.coursesService
      .getCourseById(courseId)
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => this.courseData = res);
  }

  private createAddCourseForm(): void {
    const title = this.courseData ? this.courseData.title : '';
    const description = this.courseData && this.courseData.description ? this.courseData.description : '';
    const duration = this.courseData && this.courseData.duration ? this.courseData.duration : '';
    const date = this.courseData && this.courseData.creationDate ? this.courseData.creationDate : '';

    this.addCourseForm = this.fb.group({
      title: [title],
      description: [description],
      duration: [duration],
      date: [date],
      authors: ['']
    });
  }

}
