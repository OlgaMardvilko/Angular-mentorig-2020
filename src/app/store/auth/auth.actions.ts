import { createAction, props } from '@ngrx/store';
import { IUser } from 'src/app/models/user.model';

export enum AuthActionTypes {
  LOGIN = '[Auth] Login',
  LOGIN_SUCCESS = '[Auth] Login Success',
  LOGOUT = '[Auth] logout',
  LOGOUT_COMPLETE = '[Auth] logoutComplete',
  CHECK_AUTH = '[Auth] checkAuth',
  CHECK_AUTH_COMPLETE = '[Auth] checkAuthComplete',
  GET_USER_PROFILE = '[Auth] getUserProfile',
  GET_USER_PROFILE_COMPLETE = '[Auth] getUserProfileComplete',
}

export const login = createAction(
  AuthActionTypes.LOGIN,
  props<{userData: IUser}>()
);

export const loginSuccess = createAction(
  AuthActionTypes.LOGIN_SUCCESS,
  props<{ isLoggedIn: boolean}>()
);

export const logout = createAction(
  AuthActionTypes.LOGOUT
);

export const logoutComplete = createAction(
  AuthActionTypes.LOGOUT_COMPLETE
);

export const checkAuth = createAction(
  AuthActionTypes.CHECK_AUTH
);

export const checkAuthComplete = createAction(
  AuthActionTypes.CHECK_AUTH_COMPLETE,
  props<{ isLoggedIn: boolean }>()
);

export const getUserProfile = createAction(
  AuthActionTypes.GET_USER_PROFILE
);

export const getUserProfileComplete = createAction(
  AuthActionTypes.GET_USER_PROFILE_COMPLETE,
  props<{ profile: IUser }>()
);
