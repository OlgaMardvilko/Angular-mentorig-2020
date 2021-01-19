import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { AuthActionTypes } from './auth.actions';
import { Router } from '@angular/router';
import { EMPTY } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}

  login$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActionTypes.LOGIN),
    mergeMap(({ userData }) => this.authService.login(userData)
      .pipe(
        map((data) => !!data.token),
        map((isLoggedIn) => ({ type: AuthActionTypes.LOGIN_SUCCESS, isLoggedIn })),
        tap(() => this.router.navigate(['/courses'])),
        catchError(() => EMPTY)
      ))
    )
  );

  checkAuth$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActionTypes.CHECK_AUTH),
      map(() => this.authService.isAuthenticated),
      map((isLoggedIn) => ({ type: AuthActionTypes.CHECK_AUTH_COMPLETE, isLoggedIn }))
    )
  );

  logOut$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActionTypes.LOGOUT),
      map(() => this.authService.logout()),
      map(() => ({ type: AuthActionTypes.LOGOUT_COMPLETE })),
      tap(() => this.router.navigate(['auth/login']))
    )
  );

  getUserProfile$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActionTypes.GET_USER_PROFILE),
    mergeMap(() => this.authService.getUserInfo()
      .pipe(
        map((profile) => ({ type: AuthActionTypes.GET_USER_PROFILE_COMPLETE, profile })),
        catchError(() => {
          this.router.navigate(['auth/login']);
          return EMPTY;
        })
      ))
    )
  );
}
