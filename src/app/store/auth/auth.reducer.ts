import { createReducer, on, Action } from '@ngrx/store';
import * as authActions from './auth.actions';
import { IUser } from 'src/app/models/user.model';

export const authFeatureName = 'auth';

export interface AuthState {
  profile: IUser;
  isLoggedIn: boolean;
}

export const initialAuthState: AuthState = {
  isLoggedIn: false,
  profile: null,
};

const authReducerInternal = createReducer(
  initialAuthState,

  on(authActions.loginSuccess, (state, { isLoggedIn }) => {
    return {
      ...state,
      isLoggedIn,
    };
  }),
  on(authActions.checkAuthComplete, (state, { isLoggedIn }) => {
    return {
      ...state,
      isLoggedIn,
    };
  }),
  on(authActions.logoutComplete, (state) => {
    return {
      ...state,
      profile: null,
      isLoggedIn: false,
    };
  }),
  on(authActions.getUserProfileComplete, (state, { profile }) => {
    return {
      ...state,
      profile
    };
  }),
);

export function authReducer(state: AuthState | undefined, action: Action): AuthState {
  return authReducerInternal(state, action);
}
