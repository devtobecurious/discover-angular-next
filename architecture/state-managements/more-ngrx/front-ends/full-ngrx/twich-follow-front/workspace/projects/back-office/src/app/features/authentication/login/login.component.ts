import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToLogUser } from '../models';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  loginForm = inject(FormBuilder).group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });
  errorOnLogin$ = this.authService.selectAuthError();

  private client = inject(HttpClient);

  clickToLogin(): void {
    this.authService.login(this.loginForm.value as ToLogUser);
  }
}
