import { Component } from '@angular/core';
import { AuthenticateFormComponent } from '../../components/authenticate-form/authenticate-form.component';

@Component({
  selector: 'dtbc-login',
  standalone: true,
  imports: [AuthenticateFormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {}
