import { Component, inject } from '@angular/core';
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

  clickToLogin(): void {
    this.authService.login(this.user);
  }
}
