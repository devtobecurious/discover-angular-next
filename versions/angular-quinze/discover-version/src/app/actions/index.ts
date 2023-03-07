import { Observable, map } from "rxjs";
import { ApiMovieResult, MovieResult } from "../models";
import { inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";

export const getFilms = (): void => {
  const client = inject(HttpClient);
  client.get<ApiMovieResult>('https://swapi.dev/api/films').pipe(map(item => item.results)).subscribe(items => {
    console.info('movies', items);
  });
}
