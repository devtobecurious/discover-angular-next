import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { AuthenticateUser } from 'src/app/core/models/authenticate-user';

@Injectable({
  providedIn: 'any'
})
export class LoginService {

  constructor() { }

  connect(loginSetting: AuthenticateUser): Observable<AuthenticateUser> {
    console.info('test');
    return of({
      email: loginSetting.email,
      password: loginSetting.password,
      jwt: { key: ''}
    }).pipe(delay(1000));
  }
}
