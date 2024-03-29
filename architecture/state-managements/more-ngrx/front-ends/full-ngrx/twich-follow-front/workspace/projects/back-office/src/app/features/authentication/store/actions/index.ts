import { createAction, props } from "@ngrx/store";
import { ApiError, AuthenticateStateWithToken, ToLogUser } from "../../models";

export const isLogginAction = createAction('[Auth] Is Loggin', props<{ user: ToLogUser }>());
export const isLogginSuccessAction = createAction('[Effect] Is Loggin', props<{ user: AuthenticateStateWithToken }>());
export const isLogginFailureAction = createAction('[Effect] Is Loggin failed', props<{ error: ApiError }>());



export const isLogoutAction = createAction('[Auth] Is Logout');
