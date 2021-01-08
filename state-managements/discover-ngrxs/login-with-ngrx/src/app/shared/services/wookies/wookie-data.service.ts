import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DefaultDataService, DefaultDataServiceConfig, HttpUrlGenerator } from "@ngrx/data";
import { Observable } from "rxjs";
import { Wookie } from "src/app/core/models/wookie";

@Injectable()
export class WookieDataService extends DefaultDataService<Wookie>  {
  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super('Wookie', http, httpUrlGenerator);
  }

  getAll(): Observable<Wookie[]> {
    return this.http.get<Wookie[]>('/api/wookies');
  }
}
