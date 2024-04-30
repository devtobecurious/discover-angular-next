import { effect, inject, Injectable } from '@angular/core';
import { AuthenticateStore } from '../store';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthenticateApplication {
  private readonly router = inject(Router);
  private readonly infra = inject(AuthenticateStore);

  private authEffect = effect(() => {
    if (this.infra.isAuthenticated()) {
      this.router.navigate(['home']);
    }
  });

  logIn(login: string, password: string) {
    this.infra.logIn({ login, password });
  }
}
