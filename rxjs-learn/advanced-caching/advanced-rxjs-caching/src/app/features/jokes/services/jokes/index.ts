import { HttpClient } from "@angular/common/http";
import { Injectable, InjectionToken, inject } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { BehaviorSubject, Subject, Subscription, combineLatest, concatMap, merge, of, shareReplay, switchMap, takeUntil, tap, timer } from "rxjs";
import { Observable } from "rxjs/internal/Observable";
import { map } from "rxjs/internal/operators/map";
import { Joke } from "../../models";

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
    map(item => [({ id: item.id, url: item.url, content: item.value })])
  );
}

const getJokeRawList = (httpClient: HttpClient, category = ''): Observable<Joke[]> => {
  return httpClient.get<JokesApiResult>(`https://api.chucknorris.io/jokes/search?query=${category}`)
  .pipe(
    map(item => item.result.map(jokeResult => ({ id: jokeResult.id, url: jokeResult.url, content: jokeResult.value }))),
  );
}

@Injectable({
  providedIn: 'root'
})
export class JokeService {
  private cache$ : Observable<Joke[]> | null = null;
  private httpClient = inject(HttpClient);
  private category = inject(OneCategoryService);
  private cacheSize = inject(CACHE_SIZE);
  private intervalRefresh = inject(REFRESH_INTERVAL);
  private reload$ = new Subject<void>();

  getAll(): Observable<Joke[]> {
    if (! this.cache$) {
      const timer$ = timer(0, this.intervalRefresh);

      this.cache$ = this.category.observable.pipe(
        switchMap(category => combineLatest([timer$, of(category)])),
        concatMap(categoryTimer => getJokeRawList(this.httpClient, categoryTimer[1])),
        takeUntil(this.reload$),
        shareReplay(this.cacheSize)
      );
    }

    return this.cache$;
  }

  force(): void {
    this.reload$.next();
    this.cache$ = null;
  }
}

@Injectable({
  providedIn: 'root'
})
export class OneCategoryService {
  private state = new BehaviorSubject<string>('');

  listen(): Subscription {
    const route = inject(ActivatedRoute);
    return route.params.subscribe(item => this.sendNewOne(item['category']));
  }

  sendNewOne(value: string): void {
    if (this.state.value !== value) {
      this.state.next(value);
    }
  }

  get observable(): Observable<string> {
    return this.state.asObservable();
  }
}

// export const JOKES_LIST = new InjectionToken<typeof getJokeList>('List of jokes');
// export const provideGetJokesList = () => ({ provide: JOKES_LIST, useFactory: () => getJokeList });

export const CACHE_SIZE = new InjectionToken<number>('CACHE SIZE');
export const provideDefaultCacheSize = () => ({ provide: CACHE_SIZE, useValue: 1 });


export const REFRESH_INTERVAL = new InjectionToken<number>('REFRESH INTERVAL');
export const provideDefaultRefreshInterval = () => ({ provide: REFRESH_INTERVAL, useValue: 1000 });
