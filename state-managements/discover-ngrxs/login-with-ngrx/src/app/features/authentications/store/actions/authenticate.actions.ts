import { createAction, props } from "@ngrx/store";
import { AuthenticateUser } from "src/app/core/models/authenticate-user";

export const login = createAction('[Login Page] Login Action', props<{user: AuthenticateUser}>());
export const logout = createAction('[Top meny] Logout Action');

