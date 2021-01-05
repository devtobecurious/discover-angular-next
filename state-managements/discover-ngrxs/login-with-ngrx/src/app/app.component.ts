import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { ApplicationState } from './core/store/reducers';
import { AuthenticationActions } from './features/authentications/store/actions/actions-types';
import { isLoggedIn, isLoggedOut } from './features/authentications/store/selectors/authentication.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'login-with-ngrx';
  isLoggin$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;


  constructor(private store: Store<ApplicationState>) {
  }

  ngOnInit(): void {
    // this.isLoggin$ = this.store.pipe(map(state => !!state.authenticate.user)); // here, we gets update too many time, how could we get info only when state changes ?
    // this.isLoggedOut$ = this.store.pipe(map(state => !state.authenticate.user)); // here, we gets update too many time, how could we get info only when state changes ?

    // better 1 :
    // this.isLoggin$ = this.store.pipe(map(state => !!state.authenticate.user), distinctUntilChanged()); // here, we gets update too many time, how could we get info only when state changes ?
    // this.isLoggedOut$ = this.store.pipe(map(state => !state.authenticate.user), distinctUntilChanged()); // here, we gets update too many time, how could we get info only when state changes ?

    // better 2 :
    // here, we've get pure functions,inside the select.
    // this.isLoggin$ = this.store.pipe(select(state => !!state.authenticate.user)); // here, we gets update too many time, how could we get info only when state changes ?
    // this.isLoggedOut$ = this.store.pipe(select(state => !state.authenticate.user)); // here, we gets update too many time, how could we get info only when state changes ?

    // better 3 : with selectors
    this.isLoggin$ = this.store.pipe(select(isLoggedIn));
    this.isLoggedOut$ = this.store.pipe(select(isLoggedOut));
  }

  logout(): void {
    this.store.dispatch(AuthenticationActions.logout());
  }
}
