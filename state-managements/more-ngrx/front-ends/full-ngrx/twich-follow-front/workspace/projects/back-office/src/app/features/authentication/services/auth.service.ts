import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { ApiAuthUser, AuthenticateStateWithToken, ToLogUser, ToLogUserWithToken } from '../models';
import { isLogginAction } from '../store/actions';
import { selectUserIsLogged } from '../store/selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly store = inject(Store);
  private readonly httpClient = inject(HttpClient);

  login(user: ToLogUser): void {
    this.store.dispatch(isLogginAction({ user }));
  }

  authenticate(user: ToLogUser): Observable<ToLogUserWithToken> {
    return this.httpClient.post<ApiAuthUser>('http://localhost:3000/auth/login', {
      login: user.login,
      password: user.password
    }).pipe(
      map(apiUser => ({
        token: apiUser.access_token,
        login: user.login,
        password: user.password
      })
      ));
  }

  get isLogged(): Observable<boolean | undefined> {
    return this.store.select(selectUserIsLogged);
  }
}