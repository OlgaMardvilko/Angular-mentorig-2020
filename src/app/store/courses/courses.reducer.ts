import { createReducer, on, Action } from '@ngrx/store';
import { Course, ICourse } from 'src/app/models/course.model';
import * as coursesActions from './courses.actions';

export const coursesFeatureName = 'courses';

export interface CoursesState {
  courses: ICourse[];
  currentCourse: ICourse;
}

export const initialCoursesState: CoursesState = {
  courses: [],
  currentCourse: null
};

const coursesReducerInternal = createReducer(
  initialCoursesState,

  on(coursesActions.getCoursesComplete, (state, { courses }) => {
    const currentCourse = null;
    return {
      ...state,
      courses,
      currentCourse
    };
  }),

  on(coursesActions.getCurrentCourseComplete, (state, { currentCourse }) => {
    return {
      ...state,
      currentCourse,
    };
  })
);

export function coursesReducer(state: CoursesState | undefined, action: Action): CoursesState {
  return coursesReducerInternal(state, action);
}
