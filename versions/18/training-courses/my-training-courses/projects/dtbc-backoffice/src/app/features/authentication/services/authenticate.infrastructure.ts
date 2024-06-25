/* eslint-disable prettier/prettier */
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, share, shareReplay } from 'rxjs';
import { AuthenticateUser } from '../models';

@Injectable({
  providedIn: 'root',
  //useFactory: () => import.meta.env.PROD ? new AuthenticateInfrastructure() : fakeApi,
})
export class AuthenticateInfrastructure {
  private readonly http = inject(HttpClient);
  private auth$: Observable<AuthenticateUser> | null | undefined;

  logIn(login: string, password: string): Observable<AuthenticateUser> {
    if(! this.auth$) {
      this.auth$ = this.http.post<AuthenticateUser>('https://localhost:7134/api/authenticate/login',
        {
          login,
          password
        }
      ).pipe(
        shareReplay(1)
      )
    }

    return this.auth$;
  }
}
