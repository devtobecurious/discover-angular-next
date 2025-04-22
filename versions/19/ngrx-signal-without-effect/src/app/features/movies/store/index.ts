import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";
import { Movie, Movies } from "../models";
import { inject } from "@angular/core";
import { GetOne } from "../services/get-one";
import { rxMethod } from "@ngrx/signals/rxjs-interop";
import { pipe, switchMap, tap } from "rxjs";
import { tapResponse } from "@ngrx/operators";

export interface MoviesState {
    movies: Movies;
    selectedMovie: Movie | undefined | null;
    loading: boolean;
    error: unknown | null | undefined;
}

export const initialState: MoviesState = {
    movies: [],
    selectedMovie: undefined,
    loading: false,
    error: undefined
}

export const MoviesStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store, getOneService = inject(GetOne)) => ({
    setOne: rxMethod<number>(
      pipe(
        tap(() => patchState(store, { loading: true })),
        switchMap(id => {
          return getOneService.getOne(id).pipe(
            tapResponse({
              next: movie => patchState(store, { loading: false, selectedMovie: movie }),
              error: (err) => {
                patchState(store, { loading: false, error: err });
              },
            })
          );
        })
      )
    ),
  }))
)
