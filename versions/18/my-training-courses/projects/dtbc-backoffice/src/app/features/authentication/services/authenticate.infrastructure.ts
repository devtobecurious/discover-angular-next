import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { AuthenticateUser } from '../models';

const fakeApi: AuthenticateInfrastructure = {
  logIn(login, password): Observable<AuthenticateUser> {
    const user: AuthenticateUser = {
      surname: 'Chewie',
    };

    return of(user).pipe(delay(1500));
  },
}

@Injectable({
  providedIn: 'root',
  useFactory: () => import.meta.env.PROD ? new AuthenticateInfrastructure() : fakeApi,
})
export class AuthenticateInfrastructure {
  logIn(login: string, password: string): Observable<AuthenticateUser> {
    throw new Error('Not implemented exception');
  }
}
