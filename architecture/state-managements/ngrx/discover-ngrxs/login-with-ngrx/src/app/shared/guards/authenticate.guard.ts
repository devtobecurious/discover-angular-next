import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ApplicationState } from 'src/app/core/store/reducers';
import { isLoggedIn } from 'src/app/features/authentications/store/selectors/authentication.selector';

@Injectable()
export class AuthenticateGuard implements CanActivate {
  constructor(private store: Store<ApplicationState>, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.store.pipe(
      select(isLoggedIn),
      tap(loggedIn => {
        if (! loggedIn) {
          this.router.navigateByUrl('/login');
        }
      })
      );
  }

}
