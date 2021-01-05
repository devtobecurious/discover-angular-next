import { Injectable } from "@angular/core";
import { act, Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthenticateUser } from "src/app/core/models/authenticate-user";
import { AuthenticateActionTypes } from "../actions/authenticate.actions";
import { login } from '../actions/authenticate.actions';
import * as actionTypes from '../actions/actions-types';
import { tap } from "rxjs/operators";
import { Router } from "@angular/router";

// V1
// @Injectable()
// export class AuthenticateEffect {
//   constructor(private actions$: Actions) {
//     this.actions$.subscribe(action => {
//       if (action.type === AuthenticateActionTypes.Login) {
//         localStorage.setItem('user',  JSON.stringify(action['user']));
//       }
//     });
//   }
// }


// V2
// @Injectable()
// export class AuthenticateEffect {
//   constructor(private actions$: Actions) {
//     const login$ = this.actions$.pipe(
//       ofType(actionTypes.AuthenticationActions.login),
//       tap(action => {
//         localStorage.setItem('user',  JSON.stringify(action.user));
//       })
//     );
//     login$.subscribe();
//   }
// }

// V3
@Injectable()
export class AuthenticateEffect {
  constructor(private actions$: Actions, private router: Router) {

  }

  login$ = createEffect(() => this.actions$.pipe(
    ofType(actionTypes.AuthenticationActions.login),
    tap(action => {
      localStorage.setItem('user', JSON.stringify(action.user));
    })
  ), { dispatch: false }); // without that, we create an infinite loop, because after the tap, there is still an action

  logout$ = createEffect(() => this.actions$.pipe(
    ofType(actionTypes.AuthenticationActions.logout),
    tap(action => {
      localStorage.removeItem('user');
      this.router.navigateByUrl('/login');
    })
    ),
  {dispatch: false});
}
