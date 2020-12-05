import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

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
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  login(): void {
    const loginData = this.loginForm.value;
    const token = 'Successful Login';
    this.authService.login(loginData, token);
    console.log('logged in successfully');
  }

  private createLoginForm(): void {
    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    });
  }

}
