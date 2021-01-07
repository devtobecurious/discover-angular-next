import { Update } from "@ngrx/entity";
import { createAction, props } from "@ngrx/store";
import { Wookie } from "src/app/core/models/wookie";

export enum AuthenticateActionTypes {
  LoadAll = '[Wookies resolver] Load All wookies',
  LoadEffects = '[Loads Wookies effect] Load All wookies',
  EditOne = '[Edit Wookie page] Wookie update',
  EditEffects = '[Close Wookie page] Wookie id updated',
}


export const loadAllWookies = createAction(AuthenticateActionTypes.LoadAll);
export const wookiesLoaded = createAction(AuthenticateActionTypes.LoadEffects, props<{wookies: Wookie[]}>());

export const wookyWillUpdate = createAction(AuthenticateActionTypes.EditOne, props<{update: Update<Wookie>}>());
export const wookyUpdated = createAction(AuthenticateActionTypes.EditOne, props<{update: Update<Wookie>}>());

