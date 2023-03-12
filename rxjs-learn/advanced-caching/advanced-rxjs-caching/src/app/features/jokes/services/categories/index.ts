import { HttpClient } from "@angular/common/http"
import { inject } from "@angular/core"
import { BehaviorSubject, Observable, map } from "rxjs";
import { CategoryType } from "../../models";
import { ActivatedRoute } from "@angular/router";

export function getJokeCategories(): Observable<CategoryType[]> {
  const httpClient = inject(HttpClient);
  return httpClient.get<string[]>('https://api.chucknorris.io/jokes/categories')
  .pipe(
    map(items => items.map(label => ({ value: label })))
  );
}
