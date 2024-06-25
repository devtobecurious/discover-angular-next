/* eslint-disable prettier/prettier */
import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { NullOrUndefinedOrType } from '../../../core/types/customs';
import { AuthenticateUser } from '../models';
import { computed, inject } from '@angular/core';
import { AuthenticateInfrastructure } from '../services/authenticate.infrastructure';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { tapResponse } from '@ngrx/operators';
import { concatMap, pipe, tap } from 'rxjs';
import { LocalStorageAuthenticateInfrastructure } from '../services/localstorage.authenticate.infrastructure';

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
  withMethods((store, infra = inject(AuthenticateInfrastructure),
                      localInfra = inject(LocalStorageAuthenticateInfrastructure)) => ({

    loadFromLocal(user: AuthenticateUser): void {
      patchState(store, { user, isAuthenticated: true })
    },
    logIn: rxMethod<LoginState>(
      pipe(
        tap(() => patchState(store, { isLoading: true })),
        concatMap(input => {
          return infra.logIn(input.login, input.password).pipe(
            tap(result => localInfra.createSession(result)),
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
    onInit(store, localInfra = inject(LocalStorageAuthenticateInfrastructure)) {
      const session = localInfra.getSession();

      if(session.surname && session.token) {
        store.loadFromLocal({
          email: '',
          login: '',
          surname: session.surname,
          token: session.token
        })
      }
    }
  })
);
