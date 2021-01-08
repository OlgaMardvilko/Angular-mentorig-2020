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
      ? this.updateCourse(courseData)
      : this.createCourse(courseData);

    this.router.navigate(['courses']);
  }

  onCancel(): void {
    this.addCourseForm.reset();
  }

  private updateCourse(course: ICourse): void {
    this.coursesService.updateCourse(course).subscribe(res => console.log(res));
  }

  private createCourse(course: ICourse): void {
    this.coursesService.createCourse(course).subscribe(res => console.log(res));
  }

  private getCourseData(courseId: string): void {
    this.coursesService
      .getCourseById(courseId)
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => this.courseData = res);
  }

  private createAddCourseForm(): void {
    const name = this.courseData ? this.courseData.name : '';
    const description = this.courseData && this.courseData.description ? this.courseData.description : '';
    const length = this.courseData && this.courseData.length ? this.courseData.length : '';
    const date = this.courseData && this.courseData.date ? this.courseData.date : '';

    this.addCourseForm = this.fb.group({
      name: [name],
      description: [description],
      length: [length],
      date: [date],
      authors: ['']
    });
  }

}
