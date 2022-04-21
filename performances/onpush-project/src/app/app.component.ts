import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Tile } from './features/mastermind/models';
import { TileService } from './features/mastermind/services/tile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'onpush-project';
  tiles: Tile[] = [];

  constructor(private service: TileService) {
  }

  ngOnInit(): void {
    this.service.loadAll().pipe(tap(item => console.info(item))).subscribe(tiles => this.tiles = tiles);
  }

}
