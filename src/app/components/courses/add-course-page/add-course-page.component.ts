import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { switchMap, takeUntil } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { IAuthor, ICourse } from 'src/app/models/course.model';
import { selectCurrentCourse, addCourse, updateCourse } from '../../../store';
import { select, Store } from '@ngrx/store';
import { VALIDATIONS } from '../../../config/validation.config';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.scss']
})
export class AddCoursePageComponent implements OnInit, OnDestroy {

  public addCourseForm: FormGroup;
  public courseId: string;
  public courseData: ICourse;
  public courseAuthors: IAuthor[];
  private destroy$ = new Subject();
  currentCourses$: Observable<ICourse> = this.store.pipe(select(selectCurrentCourse));

  public VALIDATIONS = VALIDATIONS;

  get formAction(): string {
    return this.courseId ? 'Edit course' : 'Add course';
  }

  get isFormInvalid(): boolean {
    return this.addCourseForm.invalid;
  }

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private store: Store<any>,
    private coursesService: CoursesService
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
      });

    this.coursesService.getCourseAuthors()
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => this.courseAuthors = res);

  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  addCourse(): void {
    const formValue = this.addCourseForm.value;
    const courseId = this.courseId ? this.courseId : this.createId();

    const courseData = {
      id: courseId,
      ...formValue
    };

    this.courseId
      ? this.updateCourse(courseData)
      : this.createCourse(courseData);
  }

  onCancel(): void {
    this.addCourseForm.reset();
  }

  hasError(controlName: string, rule: string): boolean {
    return this.addCourseForm.get(controlName).hasError(rule);
  }

  private updateCourse(course: ICourse): void {
    this.store.dispatch(updateCourse({course}));
  }

  private createCourse(course: ICourse): void {
    this.store.dispatch(addCourse({course}));
  }

  private createAddCourseForm(courseData: ICourse): void {
    const name = courseData ? courseData.name : '';
    const description = courseData && courseData.description ? this.courseData.description : '';
    const length = courseData && courseData.length ? this.courseData.length : '';
    const date = courseData && courseData.date ? this.courseData.date : '';
    const authors = courseData && courseData.authors ? courseData.authors : null;

    this.addCourseForm = this.fb.group({
      name: [name, [Validators.required, Validators.maxLength(50)]],
      description: [description, [Validators.required, Validators.maxLength(500)]],
      length: [length, Validators.required],
      date: [date, Validators.required],
      authors: [authors]
    });
  }

  private createId(): string {
    return Date.now().toString();
  }

}
