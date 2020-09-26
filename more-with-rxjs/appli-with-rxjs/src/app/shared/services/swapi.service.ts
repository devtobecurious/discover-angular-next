import { People } from './../../core/models/people';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { PeopleResult } from 'src/app/core/models/people-result';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<People[]> {
    return this.httpClient.get<PeopleResult>('https://swapi.dev/api/people/')
                          .pipe(map(item => item.results));
  }
}
