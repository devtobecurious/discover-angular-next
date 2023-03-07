import { Injectable, inject } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { PeopleApiResult } from './models';

@Injectable({
  providedIn: 'root'
})
export class PeopleDatalayerService {
  private readonly api = process.env['MON_API_STARWARS'];
  private http = inject(HttpClient);

  getAll(): Observable<PeopleApiResult> {
    return this.http.get<PeopleApiResult>(`${this.api?.trim()}/api/people`);
  }
}
