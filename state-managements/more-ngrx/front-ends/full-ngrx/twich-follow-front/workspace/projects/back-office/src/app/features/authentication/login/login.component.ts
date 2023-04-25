import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ToLogUser } from '../models';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: ToLogUser = {
    login: '', password: ''
  }
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  errorOnLogin$ = this.authService.selectAuthError();

  clickToLogin(): void {
    this.authService.login(this.user);
  }
}
