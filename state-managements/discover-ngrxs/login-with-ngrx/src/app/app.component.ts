import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { ApplicationState } from './core/store/reducers';
import { AuthenticationActions } from './features/authentications/store/actions/actions-types';
import { login } from './features/authentications/store/actions/authenticate.actions';
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
  pageLoading: boolean = false;


  constructor(private store: Store<ApplicationState>, private router: Router) {
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

    const userProfile = localStorage.getItem('user');
    if (userProfile) {
      this.store.dispatch(login({ user: JSON.parse(userProfile) }));
    }

    this.router.events.subscribe(event => {
      switch(true) {
        case event instanceof NavigationStart: {
          this.pageLoading = true;
          console.info('loading', this.pageLoading);
          break;
        }
        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          console.info('loading', this.pageLoading);
          this.pageLoading = false;
          break;
        }
      }
    })

  }

  logout(): void {
    this.store.dispatch(AuthenticationActions.logout());
  }
}
