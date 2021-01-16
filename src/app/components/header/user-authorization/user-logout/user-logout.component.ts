import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { logout } from '../../../../store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-user-logout',
  templateUrl: './user-logout.component.html',
  styleUrls: ['./user-logout.component.scss']
})
export class UserLogoutComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService,
    private store: Store<any>
  ) { }

  ngOnInit(): void { }

  logOut(): void {
    this.store.dispatch(logout());
  }
}
