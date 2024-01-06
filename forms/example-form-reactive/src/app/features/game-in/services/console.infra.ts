import { Injectable } from "@angular/core";
import { Observable, delay, of } from "rxjs";
import { GameConsoles } from "../models";

@Injectable( {providedIn: 'root'})
export class ConsoleInfra {
  getAll(): Observable<GameConsoles> {
    const result: GameConsoles = [
      { id: 1, label: 'PS', version: 4 },
      { id: 2, label: 'PS', version: 5 },
      { id: 3, label: 'Switch', version: 1 }
    ];

    return of(result).pipe(delay(500));
  }
}
