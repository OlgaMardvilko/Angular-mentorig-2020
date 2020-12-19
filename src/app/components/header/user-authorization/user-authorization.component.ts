import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-authorization',
  templateUrl: './user-authorization.component.html',
  styleUrls: ['./user-authorization.component.scss']
})
export class UserAuthorizationComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.getUserInfo();
  }

  logIn(): void {
    this.router.navigate(['auth/login']);
  }

  logOut(): void {
    this.authService.logout();
    this.router.navigate(['auth/login']);
  }

  getUserInfo(): void {
    this.authService.getUserInfo()
      .subscribe(user => console.log('user', user));
  }

}
