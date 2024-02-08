import { Injectable } from "@angular/core";
import { Observable, delay, of } from "rxjs";
import { Games } from "../models";

const fakeService: GamesInfrastructure = {
  getAll(): Observable<Games> {
    const result: Games = [
      {
        id: 1,
        title: 'God of war 3' // the best !
      },
      {
        id: 2,
        title: 'Rise of tomb raider' // the 2nd best ! :D
      }
    ];

    return of(result).pipe(delay(500)); // On simule l'appel à l'api
  }
}

@Injectable({
  providedIn: 'root',
  useValue: fakeService
})
export class GamesInfrastructure {
  getAll(): Observable<Games> {
    throw new Error('Not implemented');
  }
}
