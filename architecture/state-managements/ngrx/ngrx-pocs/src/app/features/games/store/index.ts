import { createReducer, on } from "@ngrx/store";
import { Games } from "../models";
import { removeLastGameCommand, setGamesStateCommand } from "./games.actions";
import { stat } from "node:fs";

// Etape 1 : State
export interface GamesState {
  items: Games
}

// Etape 02 : Etat initial
export const initialGamesState: GamesState = {
  items: []
}

// Etape 3 : Reducer
export const gamesReducer = createReducer(
  initialGamesState,

  on(removeLastGameCommand, (state, action) => {
    const newItems = [...state.items];

    newItems.pop();

    return {
      items: newItems
    }
  }),

  on(setGamesStateCommand, (state, action) => {
    const newVersionOfState: GamesState = {
      items: [...action.items] // On clone les items
    }

    return newVersionOfState; // On renvoie une nouvelle instance du state ! :)
  })
);
