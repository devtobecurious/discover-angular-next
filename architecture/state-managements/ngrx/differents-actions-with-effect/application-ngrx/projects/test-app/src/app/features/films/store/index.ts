import { createReducer, on } from "@ngrx/store";
import { Films } from "../models/films";
import { initFilmsAction } from "./films.actions";

export interface FilmsState {
  items: Films
}

const initialValue: FilmsState = {
  items: []
}

export const filmsReducer = createReducer(
  initialValue,
  on(initFilmsAction, (state, action) => {
    const newState = { items: [...state.items] }

    newState.items.push({
      id: 1,
      title: 'A new Hope',
      year: Math.random()
    },
    {
      id: 2,
      title: 'Empire strike back',
      year: Math.random()
    })

    return newState
  })
)
