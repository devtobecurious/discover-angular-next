/* eslint-disable prettier/prettier */
import { Injectable } from "@angular/core";

export type WithToken = {
  token: string | null
}

export type SurnameWithToken = {
   surname: string | null
} & WithToken

@Injectable({
  providedIn: 'root',
})
export class LocalStorageAuthenticationInfrastructure {
  startSession(user: SurnameWithToken): void {
    if(user.surname && user.token) {
      localStorage.setItem('id_token', user.token);
      localStorage.setItem('surname', user.surname);
    }
  }

  getSession(): SurnameWithToken {
    return {
      surname: localStorage.getItem('surname'),
      token: localStorage.getItem('id_token')
    }
  }
}
