import { Component } from '@angular/core';
import { AuthenticateFormComponent } from '../../components/authenticate-form/authenticate-form.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'dtbc-login',
  standalone: true,
  imports: [AuthenticateFormComponent, MatProgressSpinnerModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {

}
