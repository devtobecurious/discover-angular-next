import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { NullOrUndefinedOrType } from '../../../core/types/customs';
import { AuthenticateUser } from '../models';
import { computed, inject } from '@angular/core';
import { AuthenticateInfrastructure } from '../services/authenticate.infrastructure';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { tapResponse } from '@ngrx/operators';
import { concatMap, pipe, tap } from 'rxjs';

export type AuthenticateUserState = {
  user: NullOrUndefinedOrType<AuthenticateUser>;
  isLoading: boolean;
  isAuthenticated: boolean;
};

export type LoginState = {
  login: string;
  password: string;
};

const initialState: AuthenticateUserState = {
  isAuthenticated: false,
  isLoading: false,
  user: undefined,
};

export const AuthenticateStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed(store => ({
    isLogged: computed(() => store.isAuthenticated()),
    isNotLogged: computed(() => !store.user() || !store.isAuthenticated()),
  })),
  withMethods((store, infra = inject(AuthenticateInfrastructure)) => ({
    logIn: rxMethod<LoginState>(
      pipe(
        tap(() => patchState(store, { isLoading: true })),
        concatMap(input => {
          return infra.logIn(input.login, input.password).pipe(
            tapResponse({
              next: user =>
                patchState(store, {
                  isAuthenticated: true,
                  user: user,
                  isLoading: false,
                }),
              error: () => patchState(store, { isLoading: false }),
            })
          );
        })
      )
    ),
  }))
);
