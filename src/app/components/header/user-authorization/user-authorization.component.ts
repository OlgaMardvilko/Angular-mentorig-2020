import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-authorization',
  templateUrl: './user-authorization.component.html',
  styleUrls: ['./user-authorization.component.scss']
})
export class UserAuthorizationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  logIn(): void {
    console.log('handler for future action LOGIN');
  }

  logOut(): void {
    console.log('handler for future action LOGOUT');
  }

}
