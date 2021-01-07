import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Update } from "@ngrx/entity";
import { concatMap, map, switchMap } from "rxjs/operators";
import { Wookie } from "src/app/core/models/wookie";
import { WookieService } from "src/app/shared/services/wookies/wookie.service";
import * as actionTypes from '../actions/actions-types';

@Injectable()
export class WookiesEffect {
  constructor(private actions$: Actions, private service: WookieService) {
  }

  // name here is not important
  loadWookies$ = createEffect(() => this.actions$.pipe(
    ofType(actionTypes.WookiesActions.loadAllWookies),
    concatMap(action => this.service.getAll()),
    map((wookies: Wookie[]) => actionTypes.WookiesActions.wookiesLoaded({wookies}))
  ));

  saveWookie$ = createEffect(() => this.actions$.pipe(
    ofType(actionTypes.WookiesActions.wookyWillUpdate),
    concatMap(action => this.service.saveOne(action.update.id, action.update.changes)),
    map((wookie: Wookie) => {
      const update: Update<Wookie> = {
        id: wookie.id,
        changes: wookie
      };
      const actionReturn = actionTypes.WookiesActions.wookyUpdated({ update });

      return actionReturn;
    }),
  ),
  {dispatch: false}
  );
}
