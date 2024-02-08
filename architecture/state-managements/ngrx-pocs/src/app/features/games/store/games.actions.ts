import { createAction, props } from "@ngrx/store";
import { Games } from "../models";

export const requestToGetGames = createAction('[UI] - request to get games from api');

type UseGames = {
  items: Games
}
export const setGamesStateCommand = createAction('[EFFECT] - action to update state by reducer', props<UseGames>()); // Bien penser aux parenthèses !
