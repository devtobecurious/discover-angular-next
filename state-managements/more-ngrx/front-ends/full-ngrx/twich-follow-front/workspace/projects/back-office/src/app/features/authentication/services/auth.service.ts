import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ToLogUser } from '../models';
import { isLogginAction } from '../store/actions';
import { selectUserIsLogged } from '../store/selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly store = inject(Store);

  login(user: ToLogUser): void {
    this.store.dispatch(isLogginAction({ user }));
  }

  get isLogged(): Observable<boolean | undefined> {
    return this.store.select(selectUserIsLogged);
  }
}
