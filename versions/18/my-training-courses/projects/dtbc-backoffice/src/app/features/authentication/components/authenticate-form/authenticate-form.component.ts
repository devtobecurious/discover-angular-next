import { Component, inject, OnInit } from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {
  FormControl,
  Validators,
  ReactiveFormsModule,
  FormBuilder,
} from '@angular/forms';
import { merge } from 'rxjs';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'dtbc-authenticate-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatIconModule, MatDividerModule, MatButtonModule],
  templateUrl: './authenticate-form.component.html',
  styleUrl: './authenticate-form.component.css',
})
export class AuthenticateFormComponent implements OnInit {
  currentForm = inject(FormBuilder).group({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  loginErrorMessage = '';
  passwordErrorMessage = '';

  updateEmailErrors$ = merge(this.email.statusChanges, this.email.valueChanges)
                       .pipe(takeUntilDestroyed())
  updatePasswordErrors$ = merge(this.password.statusChanges, this.password.valueChanges)
                       .pipe(takeUntilDestroyed())

  ngOnInit(): void {
    this.updateEmailErrors$.subscribe(() => this.updateErrorMessage());
    this.updatePasswordErrors$.subscribe(() => this.updateErrorMessage());
  }

  updateErrorMessage() {
    this.loginErrorMessage = this.updateErrorMessageFor(this.email, 'email');
    this.passwordErrorMessage = this.updateErrorMessageFor(this.password, 'password');
  }

  private updateErrorMessageFor(control: FormControl, error: string): string {
    let message = '';

    if (control.hasError('required')) {
      message = 'You must enter a value';
    } else if (control.hasError(error)) {
      message = `Not a valid ${error}`;
    }

    return message;
  }

  get email(): FormControl {
    return this.currentForm.controls.email;
  }

  get password(): FormControl {
    return this.currentForm.controls.password;
  }
}
