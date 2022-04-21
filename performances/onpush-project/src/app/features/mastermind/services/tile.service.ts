import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, from, Observable, of } from 'rxjs';
import { Tile } from '../models';

@Injectable({
  providedIn: 'root'
})
export class TileService {
  tiles: Tile[] = [];

  constructor(private httpClient: HttpClient) {
    for (let index = 0; index < 256; index++) {
      this.tiles.push({
        isRevealed: false,
        value: Math.floor(Math.random() * 100),
        id: index
      });
    }
  }

  loadAll(): Observable<Tile[]> {
    return of(this.tiles).pipe(delay(1200));
  }
}
