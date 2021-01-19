import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Store } from '@ngrx/store';
import { login } from '../../store';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  public loginForm: FormGroup;

  get isFormInvalid(): boolean {
    return this.loginForm.invalid;
  }

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  login(): void {
    const loginData = this.loginForm.value;
    this.store.dispatch(login({userData: loginData}));
  }

  private createLoginForm(): void {
    this.loginForm = this.fb.group({
      login: [''],
      password: ['']
    });
  }

}
