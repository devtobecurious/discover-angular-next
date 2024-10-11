import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { ToLogUser, ToLogUserWithToken } from '../models';
import { isLogginAction } from '../store/actions';
import { selectUserAuthWithFailure, selectUserIsLogged } from '../store/selectors';
import { AuthLayerService } from './auth-layer.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly store = inject(Store);
  private readonly layer = inject(AuthLayerService);

  selectAuthError(): Observable<any | undefined> {
    return this.store.select(selectUserAuthWithFailure);
  }

  login(user: ToLogUser): void {
    this.store.dispatch(isLogginAction({ user }));
  }

  authenticate(user: ToLogUser): Observable<ToLogUserWithToken> {
    return this.layer.authenticate({
      username: user.username,
      password: user.password
    }).pipe(
      map(apiUser => ({
        token: apiUser.access_token,
        username: user.username,
        password: user.password
      })
    ));
  }

  get isLogged(): Observable<boolean | undefined> {
    return this.store.select(selectUserIsLogged);
  }
}
