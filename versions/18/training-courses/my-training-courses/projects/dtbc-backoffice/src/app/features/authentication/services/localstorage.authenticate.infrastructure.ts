import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageAuthenticateInfrastructure {
  sessionIsActive = signal(false);
  private token = signal<string | undefined | null>(undefined);

  // eslint-disable-next-line prettier/prettier
  createSession(authUser: { surname: string, token: string }): void {
    // moment().add()
    this.sessionIsActive.set(true);
    this.token.set(authUser.token);
    localStorage.setItem('id_token', authUser.token);
    localStorage.setItem('surname', authUser.surname);
  }

  getSession(): { surname: string | null, token: string | null } {
    const authUser = {
      surname: localStorage.getItem('surname'),
      token: localStorage.getItem('id_token'),
    };
    this.sessionIsActive.set(true);
    this.token.set(authUser.token);

    return authUser;
  }

  logout(): void {
    localStorage.removeItem('id_token');
    localStorage.removeItem('surname');
    this.sessionIsActive.set(false);
    this.token.set(null);
  }
}
