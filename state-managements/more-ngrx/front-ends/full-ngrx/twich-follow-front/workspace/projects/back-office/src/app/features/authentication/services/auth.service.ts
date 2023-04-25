import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectUserIsLogged } from '../store/selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly store = inject(Store);

  get isLogged(): Observable<boolean | undefined> {
    return this.store.select(selectUserIsLogged);
  }
}
