import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiAuthUser, ToLogUser } from '../models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthLayerService {
  private readonly httpClient = inject(HttpClient);

  authenticate(user: ToLogUser): Observable<ApiAuthUser> {
    return this.httpClient.post<ApiAuthUser>('http://localhost:3000/auth/login', {
      username: user.username,
      password: user.password
    })
  }
}
