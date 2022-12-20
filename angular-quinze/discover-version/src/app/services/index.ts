import { Observable, map } from "rxjs"
import { ApiPersonResult, PeopleResult } from "../models"
import { inject } from "@angular/core"
import { HttpClient } from "@angular/common/http"

export const getAllPeople = (url: string): Observable<PeopleResult[]> => {
  const client = inject(HttpClient);

  return client.get<ApiPersonResult>(url).pipe(
    map(item => item.results)
  );
}
