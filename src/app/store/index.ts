import { authReducer, AuthEffects } from './auth';
import { coursesReducer, CoursesEffects } from './courses';

export * from './auth';
export * from './courses';

export const appReducer = {
  auth: authReducer,
  courses: coursesReducer
};

export const appEffects = [AuthEffects, CoursesEffects];
