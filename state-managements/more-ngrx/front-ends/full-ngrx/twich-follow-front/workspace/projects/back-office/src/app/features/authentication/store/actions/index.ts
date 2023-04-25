import { createAction, props } from "@ngrx/store";
import { ToLogUser } from "../../models";

export const isLogginAction = createAction('[Auth] Is Loggin', props<{ user: ToLogUser }>());
export const isLogoutAction = createAction('[Auth] Is Logout');
