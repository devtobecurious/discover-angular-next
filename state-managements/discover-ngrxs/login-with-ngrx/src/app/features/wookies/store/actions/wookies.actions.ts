import { Update } from "@ngrx/entity";
import { createAction, props } from "@ngrx/store";
import { Wookie } from "src/app/core/models/wookie";

export enum AuthenticateActionTypes {
  LoadAll = '[Wookies resolver] Load All wookies',
  LoadEffects = '[Loads Wookies effect] Load All wookies',
  EditOne = '[Edit Wookie page] Wookie update'
}


export const loadAllWookies = createAction(AuthenticateActionTypes.LoadAll);
export const wookiesLoaded = createAction(AuthenticateActionTypes.LoadEffects, props<{wookies: Wookie[]}>());

export const wookiesUpdated = createAction(AuthenticateActionTypes.EditOne, props<{update: Update<Wookie>}>());
