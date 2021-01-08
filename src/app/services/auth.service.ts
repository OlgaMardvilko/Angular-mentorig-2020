import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { tap } from 'rxjs/operators';

export const L_STORAGE_AUTH_KEY = 'COURSES_AUTH_TOKEN';
export const L_STORAGE_USER_KEY = 'COURSES_USER_DATA';

const AUTH_API_URL = 'http://localhost:3004/auth';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) { }

  get authToken(): string {
    if (localStorage.getItem(L_STORAGE_AUTH_KEY)) {
      return JSON.parse(localStorage.getItem(L_STORAGE_AUTH_KEY));
    }
  }

  set authToken(token: string) {
    localStorage.setItem(L_STORAGE_AUTH_KEY, JSON.stringify(token));
  }

  get isAuthenticated(): boolean {
    return !!this.authToken;
  }

  get user(): User {
    if (localStorage.getItem(L_STORAGE_USER_KEY)) {
      return JSON.parse(localStorage.getItem(L_STORAGE_USER_KEY));
    }
  }

  set user(val: User) {
    localStorage.setItem(L_STORAGE_USER_KEY, JSON.stringify(val));
  }

  login(userData: User): Observable<{token: string}> {
    return this.http.post<{token: string}>(AUTH_API_URL + `/login`, userData)
                    .pipe(tap(({ token }) => this.authToken = token));
  }

  logout(): void {
    localStorage.removeItem(L_STORAGE_AUTH_KEY);
    localStorage.removeItem(L_STORAGE_USER_KEY);
  }

  getUserInfo(): Observable<User> {
    const token = this.authToken;
    if (this.user) {
      return of(this.user);
    }

    return this.http.post<User>(AUTH_API_URL + `/userinfo`, { token })
                    .pipe(tap(userData => {this.user = userData; }));
  }
}
