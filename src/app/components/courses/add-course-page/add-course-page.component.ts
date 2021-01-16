import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CoursesService } from 'src/app/services/courses.service';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap, takeUntil, tap } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { ICourse } from 'src/app/models/course.model';
import { selectCurrentCourse, addCourse, updateCourse } from '../../../store';
import { select, Store } from '@ngrx/store';

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
  currentCourses$ = this.store.pipe(select(selectCurrentCourse));

  get formAction(): string {
    return this.courseId ? 'Edit course' : 'Add course';
  }

  constructor(
    private fb: FormBuilder,
    private coursesService: CoursesService,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<any>
  ) { }

  ngOnInit(): void {
    this.currentCourses$.subscribe(currentCourse => {
      this.courseData = currentCourse;
      this.createAddCourseForm(this.courseData);
    });

    this.route.paramMap
      .pipe(
        switchMap(params => params.getAll('id')),
        takeUntil(this.destroy$)
      )
      .subscribe(data => {
        this.courseId = data;
        // this.getCourseData(this.courseId);
      });

    // this.createAddCourseForm();
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

    // this.router.navigate(['courses']);
  }

  onCancel(): void {
    this.addCourseForm.reset();
  }

  private updateCourse(course: ICourse): void {
    // this.coursesService.updateCourse(course).subscribe(res => console.log(res));
    this.store.dispatch(updateCourse({course}));
  }

  private createCourse(course: ICourse): void {
    // this.coursesService.createCourse(course).subscribe(res => console.log(res));
    this.store.dispatch(addCourse({course}));
  }

  // private getCourseData(courseId: string): void {
  //   this.coursesService
  //     .getCourseById(courseId)
  //     .pipe(takeUntil(this.destroy$))
  //     .subscribe(res => this.courseData = res);
  // }

  private createAddCourseForm(courseData): void {
    const name = courseData ? courseData.name : '';
    const description = courseData && courseData.description ? this.courseData.description : '';
    const length = courseData && courseData.length ? this.courseData.length : '';
    const date = courseData && courseData.date ? this.courseData.date : '';

    this.addCourseForm = this.fb.group({
      name: [name],
      description: [description],
      length: [length],
      date: [date],
      authors: ['']
    });
  }

}
