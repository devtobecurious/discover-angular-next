import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { concatMap, map, tap, catchError } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import { isLogginAction, isLogginFailureAction, isLogginSuccessAction } from '../actions';
@Injectable()
export class AuthEffect {
  private readonly authService = inject(AuthService);
  private readonly actions$ = inject(Actions);
  private readonly router = inject(Router);

  onLoggedIn$ = createEffect(() => this.actions$.pipe(
    ofType(isLogginAction),
    concatMap(action => this.authService.authenticate(action.user)),
    map(user => isLogginSuccessAction({ user: { ...user, isLogged: true } })),
    catchError(error => {
      return of(isLogginFailureAction({ error }));
    })
  ));

  onLoggedInSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(isLogginSuccessAction),
    tap(action => this.router.navigate(['/'])
    )),
    { dispatch: false }
  );
}
