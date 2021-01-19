import { createAction, props } from '@ngrx/store';
import { ICourse, ICoursesParams } from 'src/app/models/course.model';

export enum CoursesActionTypes {
  GET_COURSES = '[COURSES] getCourses',
  GET_COURSES_COMPLETE = '[COURSES] getCoursesComplete',
  GET_CURRENT_COURSE = '[COURSES] getCurrentCourse',
  GET_CURRENT_COURSE_COMPLETE = '[COURSES] getCurrentCourseComplete',
  ADD_COURSE = '[COURSES] addCourse',
  ADD_COURSE_COMPLETE = '[COURSES] addCourseComplete',
  UPDATE_COURSE = '[COURSES] updateCourse',
  UPDATE_COURSE_COMPLETE = '[COURSES] updateCourseComplete'
}

export const getCourses = createAction(
  CoursesActionTypes.GET_COURSES,
  props<{ params: ICoursesParams }>()
);

export const getCoursesComplete = createAction(
  CoursesActionTypes.GET_COURSES_COMPLETE,
  props<{ courses: ICourse[] }>()
);

export const getCurrentCourse = createAction(
  CoursesActionTypes.GET_CURRENT_COURSE,
  props<{ courseId: string }>()
);

export const getCurrentCourseComplete = createAction(
  CoursesActionTypes.GET_CURRENT_COURSE_COMPLETE,
  props<{currentCourse: ICourse}>()
);

export const addCourse = createAction(
  CoursesActionTypes.ADD_COURSE,
  props<{course: ICourse}>()
);

export const updateCourse = createAction(
  CoursesActionTypes.UPDATE_COURSE,
  props<{course: ICourse}>()
);
