import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public userData: IUser;

  get UserName(): string {
    return `${this.userData.name.first} ${this.userData.name.last}`;
  }

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.getUserInfo();
  }

  getUserInfo(): void {
    this.authService.getUserInfo()
      .subscribe(user => this.userData = user);
  }

}
