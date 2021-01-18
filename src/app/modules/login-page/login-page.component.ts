import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { login } from '../../store';
import { VALIDATIONS } from '../../config/validation.config';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent implements OnInit {

  public loginForm: FormGroup;
  public VALIDATIONS = VALIDATIONS;

  get isFormInvalid(): boolean {
    return this.loginForm.invalid;
  }

  constructor(
    private fb: FormBuilder,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  hasError(controlName: string, rule: string): boolean {
    return this.loginForm.get(controlName).getError(rule);
  }

  login(): void {
    const loginData = this.loginForm.value;
    this.store.dispatch(login({userData: loginData}));
  }

  private createLoginForm(): void {
    this.loginForm = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

}
