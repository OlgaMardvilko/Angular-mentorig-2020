import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/user.model';
import { getUserProfile, checkAuth, selectIsAuthenticated, selectUserInfo } from '../../store';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userProfile$: Observable<IUser>;
  isLoggedIn$: Observable<boolean>;

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.isLoggedIn$ = this.store.pipe(select(selectIsAuthenticated));
    this.userProfile$ = this.store.pipe((select(selectUserInfo)));
    this.store.dispatch(checkAuth());
    this.store.dispatch(getUserProfile());
  }

}
