import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticateStore } from '../store';

export const userIsAuthenticatedGuard: CanActivateFn = (
  route,
  state,
  store = inject(AuthenticateStore),
  router = inject(Router)
) => {
  const isAuthenticated = store.isAuthenticated();

  if (!isAuthenticated) {
    router.navigate(['login']);
  }

  return isAuthenticated;
};
