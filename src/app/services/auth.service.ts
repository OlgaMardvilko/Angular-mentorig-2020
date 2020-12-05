import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user.model';

export const L_STORAGE_AUTH_KEY = 'COURSES_AUTH_TOKEN';
export const L_STORAGE_USER_KEY = 'COURSES_USER_DATA';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor() { }

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

  login(userData: User, token: string): void {
    this.user = userData;
    this.authToken = token;
  }

  logout(): void {
    localStorage.removeItem(L_STORAGE_AUTH_KEY);
    localStorage.removeItem(L_STORAGE_USER_KEY);
  }

  getUserInfo() {
    const userInfo = {
      userData: this.user,
      token: this.authToken
    };

    return userInfo;
  }
}
