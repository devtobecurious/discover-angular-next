/* eslint-disable prettier/prettier */
import { computed, inject } from '@angular/core';
import { tapResponse } from '@ngrx/operators';
import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withState
} from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { concatMap, pipe, tap } from 'rxjs';
import { NullOrUndefinedOrType } from '../../../core/types/customs';
import { AuthenticateUser } from '../models';
import { AuthenticateInfrastructure } from '../services/authenticate.infrastructure';
import { LocalStorageAuthenticationInfrastructure, SurnameWithToken } from '../services/localstorage.authentication.infrastructure';

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
  withComputed((store)  => ({
    isLogged: computed(() => store.isAuthenticated()),
    isNotLogged: computed(() => !store.user() && !store.isAuthenticated()),
  })),
  withMethods((store,
               infra = inject(AuthenticateInfrastructure),
               localInfra = inject(LocalStorageAuthenticationInfrastructure)) => ({
    localLogin(user: SurnameWithToken): void {
      if(user.token && user.surname) {
        patchState(store, { isAuthenticated: true, user: { email: '', login: '', surname: user.surname, token: user.token } })
      }
    },
    logIn: rxMethod<LoginState>(
      pipe(
        tap(() => patchState(store, { isLoading: true })),
        concatMap(input => {
          return infra.logIn(input.login, input.password).pipe(
              tap(user => localInfra.startSession({ surname: user.surname, token: user.token })),
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
    })
  ),
  withHooks({
    onInit(store, localInfra = inject(LocalStorageAuthenticationInfrastructure)) {
      const userWithToken = localInfra.getSession();

      if(userWithToken.surname && userWithToken.token) {
        store.localLogin(userWithToken);
      }
    }
  })
);
