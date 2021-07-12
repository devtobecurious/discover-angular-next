import { User } from './../../models/user';
import { LocalStorageService } from './local-storage.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export declare type TokenResult = {
  access_token: string
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user !: User;

  constructor(
    private localStorage: LocalStorageService,
    private httpClient: HttpClient) { }

  getToken(): string | null {
    return this.localStorage.get('jwt_token');
  }

  logIn(user: User): Observable<User> {
    const profile = {
      email: user.login,
      password: user.password
    };

    return this.httpClient.post<TokenResult>(environment.apis.login.url, profile).pipe(
      map(item => {
        user.token = item.access_token;
        console.log(item.access_token);
        return user;
      }),
      tap(item => {
        this.user = item;
        this.localStorage.set('jwt_token', this.user.token);
      })
    );
  }

}
