import { CoursesState, coursesFeatureName } from './courses.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getCoursesFeatureState = createFeatureSelector(coursesFeatureName);

export const selectCourses = createSelector(
  getCoursesFeatureState,
  (state: CoursesState) => state.courses
);

export const selectCurrentCourse = createSelector(
  getCoursesFeatureState,
  (state: CoursesState) => state.currentCourse
);
