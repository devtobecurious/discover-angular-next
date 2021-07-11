import { User } from './../../models/user';
import { LocalStorageService } from './local-storage.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user !: User;

  constructor(private localStorage: LocalStorageService) { }

  getToken(): string | null {
    return this.localStorage.get('jwt_token');
  }


}
