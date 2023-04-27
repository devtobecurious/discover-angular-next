import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";

export type ApiResult = { results: {name:string}[] };

@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  httpClient = inject(HttpClient);

  getAll(): Observable<ApiResult> {
    return this.httpClient.get<ApiResult>('https://swapi.dev/api/planets/');
  }
}
