import { HttpClient } from "@angular/common/http";
import { InjectionToken, inject } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { map } from "rxjs/internal/operators/map";
import { Joke } from "../../models";
import { ActivatedRoute } from "@angular/router";
import { concatMap } from "rxjs/internal/operators/concatMap";

type JokeResult = {
  id: string,
  value: string,
  url: string
};

type JokesApiResult = {
  result: JokeResult[]
};

const getJokeRawList = (httpClient: HttpClient, category = ''): Observable<Joke[]> => {
  return httpClient.get<JokesApiResult>(`https://api.chucknorris.io/jokes/search?query=${category}`)
  .pipe(
    map(item => item.result.map(jokeResult => ({ id: jokeResult.id, url: jokeResult.url, content: jokeResult.value })))
  );
}

const getJokeList = (): Observable<Joke[]> => {
  const route = inject(ActivatedRoute);
  const httpClient = inject(HttpClient);

  return route.params.pipe(
    concatMap(params => getJokeRawList(httpClient, params['category']))
  );
};

export const JOKES_LIST = new InjectionToken<typeof getJokeList>('List of jokes');

export const provideGetJokesList = () => ({ provide: JOKES_LIST, useFactory: () => getJokeList });
