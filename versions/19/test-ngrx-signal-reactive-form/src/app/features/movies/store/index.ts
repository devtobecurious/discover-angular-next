import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";
import { Movie, MovieList } from "./models";
import { inject } from "@angular/core";
import { rxMethod } from "@ngrx/signals/rxjs-interop";
import { concatMap, pipe, tap } from "rxjs";
import { GetAllMovies } from "../services/get-all-movies";
import { tapResponse } from '@ngrx/operators';
import { GetOneMovie } from "../services/get-one-movie";

export interface MovieState {
    movies: MovieList;
    currentMovie ?: Movie;
    loading ?: boolean;
    error ?: null | unknown;
}

export const initialState: MovieState = {
    movies: [],
    loading: false
}

export const BooksStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store, movieService = inject(GetOneMovie), moviesService = inject(GetAllMovies)) => ({
    getOne: rxMethod<number>(
      pipe(
        tap(() => patchState(store, { loading: true })),
        concatMap(id => {
          return movieService.getOne(id).pipe(
            tapResponse({
              next: (movie) => patchState(store, { currentMovie: movie, loading: false }),
              error: (err) => {
                patchState(store, { loading: false, error: err });
              },
            })
          );
        })
      )
    ),

    updateOne: rxMethod<Movie>(
      pipe(
        tap(() => patchState(store, { loading: true })),
        concatMap(movie => {
          return moviesService.updateOne(movie).pipe(
            tapResponse({
              next: (books) => patchState(store, {  movies: [...store.movies()?.filter(item => item.id != movie.id), {...movie}], loading: false }),
              error: (err) => {
                patchState(store, { loading: false, error: err });
              },
            })
          );
        })
      )
    ),
  }))
);
