import { HttpClient } from "@angular/common/http"
import { Injectable, inject } from "@angular/core"
import { BehaviorSubject, Observable, concatMap, from, map, shareReplay, take } from "rxjs";
import { CategoryType } from "../../models";
import { ActivatedRoute } from "@angular/router";
import { CACHE_SIZE } from "../jokes";

export function getJokeCategories(): Observable<CategoryType[]> {
  const httpClient = inject(HttpClient);
  return httpClient.get<string[]>('https://api.chucknorris.io/jokes/categories')
    .pipe(
      map(items => items.map(label => ({ value: label }))),
      take(1)
    );
}

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private httpClient = inject(HttpClient);
  private categories !: Observable<CategoryType[]>;
  private cacheSize = inject(CACHE_SIZE);

  getAll(): Observable<CategoryType[]> {
    if (!this.categories) {
      this.categories = this.httpClient.get<string[]>('https://api.chucknorris.io/jokes/categories')
        .pipe(
          concatMap(items => from(items.map(label => ({ value: label })))),
          take(1),
          map(item => [item]),
          shareReplay(this.cacheSize)
        );
    }

    return this.categories;
  }
}
