import { HttpClient } from "@angular/common/http";
import { InjectionToken, inject } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { map } from "rxjs/internal/operators/map";
import { Joke } from "../../models";
import { ActivatedRoute, Params } from "@angular/router";
import { concatMap } from "rxjs/internal/operators/concatMap";
import { iif } from "rxjs/internal/observable/iif";
import { tap } from "rxjs/internal/operators/tap";
import { combineLatest, defaultIfEmpty, of } from "rxjs";

type JokeResult = {
  id: string,
  value: string,
  url: string
};

type JokesApiResult = {
  result: JokeResult[]
};

const getOneJoke = (httpClient: HttpClient): Observable<Joke[]> => {
  return httpClient.get<JokeResult>('https://api.chucknorris.io/jokes/random')
  .pipe(
    tap(item => console.info(item)),
    map(item => [({ id: item.id, url: item.url, content: item.value })])
  );
}

const getJokeRawList = (httpClient: HttpClient, category = ''): Observable<Joke[]> => {
  return httpClient.get<JokesApiResult>(`https://api.chucknorris.io/jokes/search?query=${category}`)
  .pipe(
    map(item => item.result.map(jokeResult => ({ id: jokeResult.id, url: jokeResult.url, content: jokeResult.value })))
  );
}

const getJokeList = (): Observable<Joke[]> => {
  const route = inject(ActivatedRoute);
  const httpClient = inject(HttpClient);

  const detectEmptyParam$ = (params: Params) => iif(() => typeof(params['category']) !== 'undefined',
                                                    getJokeRawList(httpClient, params['category']),
                                                    getOneJoke(httpClient))

  return route.params.pipe(
    tap(item => console.info(item['category'])),
    concatMap(detectEmptyParam$)
  );
};

export const JOKES_LIST = new InjectionToken<typeof getJokeList>('List of jokes');

export const provideGetJokesList = () => ({ provide: JOKES_LIST, useFactory: () => getJokeList });
