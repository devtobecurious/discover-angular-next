import { Component, inject, signal } from '@angular/core';
import { AuthenticateFormComponent } from '../../components/authenticate-form/authenticate-form.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AuthenticateStore } from '../../store';

@Component({
  selector: 'dtbc-login',
  standalone: true,
  imports: [AuthenticateFormComponent, MatProgressSpinnerModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private readonly store = inject(AuthenticateStore);
  isLoading = this.store.isLoading;
}
