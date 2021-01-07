import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { concatMap, map, switchMap } from "rxjs/operators";
import { Wookie } from "src/app/core/models/wookie";
import { WookieService } from "src/app/shared/services/wookies/wookie.service";
import * as actionTypes from '../actions/actions-types';

@Injectable()
export class WookiesEffect {
  constructor(private actions$: Actions, private service: WookieService) {
  }

  loadCourses$ = createEffect(() => this.actions$.pipe(
    ofType(actionTypes.WookiesActions.loadAllWookies),
    concatMap(action => this.service.getAll()),
    map((wookies: Wookie[]) => actionTypes.WookiesActions.wookiesLoaded({wookies}))
  ))
}
