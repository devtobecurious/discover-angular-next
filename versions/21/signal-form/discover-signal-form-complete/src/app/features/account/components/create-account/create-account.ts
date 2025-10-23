import { Component, signal } from '@angular/core';
import { CreateAccount, createAccountSchema } from '../models/create-account';
import { Field, form, required } from '@angular/forms/signals';

@Component({
  selector: 'app-create-account',
  imports: [Field],
  templateUrl: './create-account.html',
  styleUrl: './create-account.css'
})
export class CreateAccountComponent {
  private readonly account = signal<CreateAccount>({ firstName: '', nickName: '', password: '', confirmPassword: '' });
  protected readonly accountForm = form(this.account, createAccountSchema);

  saveOne(event: Event): void {
    event.preventDefault();
    console.log('Account to create:', this.accountForm().value(), this.accountForm().errors());
  }
}
