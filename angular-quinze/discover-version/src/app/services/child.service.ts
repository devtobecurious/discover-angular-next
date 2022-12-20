import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ApiPersonResult, PeopleResult } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ChildService {
  private client: HttpClient = inject(HttpClient);

  // constructor(private readonly client: HttpClient) { }

  getAll(): Observable<PeopleResult[]> {
    return this.client.get<ApiPersonResult>('https://swapi.dev/api/people').pipe(
      map(item => item.results)
    );
  }
}
