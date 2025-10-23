import { Component, signal } from '@angular/core';
import { CreateAccount, createAccountSchema } from '../models/create-account';
import { customError, Field, form, required, submit } from '@angular/forms/signals';

@Component({
  selector: 'app-create-account',
  imports: [Field],
  templateUrl: './create-account.html',
  styleUrl: './create-account.css'
})
export class CreateAccountComponent {
  private readonly account = signal<CreateAccount>({ firstName: '', nickName: '', password: '', confirmPassword: '', friends: [] });
  protected readonly accountForm = form(this.account, createAccountSchema);


  saveOne(event: Event): void {
    event.preventDefault();
    console.log('Account to create:', this.accountForm().value(), this.accountForm().errors());

    submit(this.accountForm, async () => {
      return Promise.resolve([customError({ kind: 'unimplemented', message: 'La création de compte est une fonctionnalité non implémentée dans cette démo.' })]);
    });
  }

  addFriend(): void {
    this.accountForm.friends().value.update(state => [...state, { nickName: ''}]);
  }
}
