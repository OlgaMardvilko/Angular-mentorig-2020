import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
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
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  login(): void {
    const loginData = this.loginForm.value;
    const token = 'Successful Login';
    this.authService.login(loginData, token);
    this.router.navigate(['/courses']);
  }

  private createLoginForm(): void {
    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    });
  }

}
