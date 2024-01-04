import { Injectable } from "@angular/core";
import { Observable, delay, of } from "rxjs";
import { Games } from "../models";

@Injectable( {providedIn: 'root'})
export class CollectGameBusiness  {
  getGameAll(): Observable<Games> {
    const list: Games = [
      { id: 1, label: 'Horizon' },
      { id: 2, label: 'Tomb raider' },
      { id: 3, label: 'Crash bandicoot' },
    ];

    return of(list).pipe(delay(1500));
  }
}
