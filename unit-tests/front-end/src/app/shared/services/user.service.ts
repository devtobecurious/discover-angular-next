import { Injectable } from '@angular/core';

export type user = { name: string };

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLoggedIn: boolean = false;
  user: user;

  constructor() { }
}
