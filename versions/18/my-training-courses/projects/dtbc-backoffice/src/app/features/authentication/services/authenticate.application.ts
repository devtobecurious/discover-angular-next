import { inject, Injectable } from '@angular/core';
import { AuthenticateStore } from '../store';

@Injectable({ providedIn: 'root' })
export class AuthenticateApplication {
  private readonly infra = inject(AuthenticateStore);

  logIn(login: string, password: string) {
    this.infra.logIn({ login, password });
  }
}
