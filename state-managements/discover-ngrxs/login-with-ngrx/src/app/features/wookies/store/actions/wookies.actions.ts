import { createAction, props } from "@ngrx/store";
import { Wookie } from "src/app/core/models/wookie";

export enum AuthenticateActionTypes {
  LoadAll = '[Wookies resolver] Load All wookies',
  LoadEffects = '[Loads Wookies effect] Load All wookies'
}


export const loadAllWookies = createAction(AuthenticateActionTypes.LoadAll);
export const wookiesLoaded = createAction(AuthenticateActionTypes.LoadEffects, props<{wookies: Wookie[]}>());

