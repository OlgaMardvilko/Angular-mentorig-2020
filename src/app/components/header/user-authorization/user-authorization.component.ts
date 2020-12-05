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
  }

  logIn(): void {
    console.log('handler for future action LOGIN');
    this.router.navigate(['/login']);
  }

  logOut(): void {
    this.authService.logout();
    console.log('handler for future action LOGOUT');
  }

}
