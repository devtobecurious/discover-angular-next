import { effect, inject, Injectable } from '@angular/core';
import { AuthenticateStore } from '../store';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthenticateApplication {
  private readonly router = inject(Router);
  private readonly store = inject(AuthenticateStore);

  private authEffect = effect(() => {
    if (this.store.isAuthenticated()) {
      this.router.navigate(['training-courses']);
    }
  });

  logIn(login: string, password: string): void {
    this.store.logIn({ login, password });
  }
}
