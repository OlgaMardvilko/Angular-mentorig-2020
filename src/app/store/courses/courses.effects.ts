import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { CoursesActionTypes } from './courses.actions';
import { Router } from '@angular/router';
import { EMPTY } from 'rxjs';
import { CoursesService } from 'src/app/services/courses.service';

@Injectable()
export class CoursesEffects {
  constructor(
    private actions$: Actions,
    private coursesService: CoursesService,
    private router: Router
  ) {}

  getCourses$ = createEffect(() => this.actions$.pipe(
    ofType(CoursesActionTypes.GET_COURSES),
    switchMap(({ params }) => this.coursesService.getCourses(params)
      .pipe(
        map((courses) => ({ type: CoursesActionTypes.GET_COURSES_COMPLETE, courses })),
        catchError(() => EMPTY)
      ))
    )
  );

  getCurrentCourse$ = createEffect(() => this.actions$.pipe(
    ofType(CoursesActionTypes.GET_CURRENT_COURSE),
    switchMap(({ courseId }) => this.coursesService.getCourseById(courseId)
      .pipe(
        map((currentCourse) => ({ type: CoursesActionTypes.GET_CURRENT_COURSE_COMPLETE, currentCourse })),
        catchError(() => {
          this.router.navigate(['/not-found']);
          return EMPTY;
        })
      ))
    )
  );

  addCourse$ = createEffect(() => this.actions$.pipe(
    ofType(CoursesActionTypes.ADD_COURSE),
    switchMap(({ course }) => this.coursesService.createCourse(course)
      .pipe(
        map((courseAdded) => ({ type: CoursesActionTypes.ADD_COURSE_COMPLETE, courseAdded })),
        tap(() => this.router.navigate(['courses'])),
        catchError(() => {
          return EMPTY;
        })
      ))
    )
  );

  updateCourse$ = createEffect(() => this.actions$.pipe(
    ofType(CoursesActionTypes.UPDATE_COURSE),
    switchMap(({ course }) => this.coursesService.updateCourse(course)
      .pipe(
        map((courseUpdated) => ({ type: CoursesActionTypes.UPDATE_COURSE_COMPLETE, courseUpdated })),
        tap(() => this.router.navigate(['courses'])),
        catchError(() => {
          return EMPTY;
        })
      ))
    )
  );
}
