import { createAction, props } from "@ngrx/store";
import { AuthenticateUser } from "src/app/core/models/authenticate-user";

export enum AuthenticateActionTypes {
  Login = '[Login Page] Login Action',
  LogOut = '[Top meny] Logout Action'
}

export const login = createAction(AuthenticateActionTypes.Login, props<{user: AuthenticateUser}>());
export const logout = createAction(AuthenticateActionTypes.LogOut);

