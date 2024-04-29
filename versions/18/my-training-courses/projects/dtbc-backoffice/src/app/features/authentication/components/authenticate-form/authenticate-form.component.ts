import { Component } from '@angular/core';
import {
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'dtbc-authenticate-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './authenticate-form.component.html',
  styleUrl: './authenticate-form.component.css',
})
export class AuthenticateFormComponent {}
