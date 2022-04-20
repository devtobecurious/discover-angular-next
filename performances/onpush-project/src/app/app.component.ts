import { Component, OnInit } from '@angular/core';
import { Tile } from './shared/ui/mastermind/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'onpush-project';
  tiles: Tile[] = [];

  constructor() {
    for (let index = 0; index < 256; index++) {
      this.tiles.push({
        color: 'grey',
        isRevealed: index %2 === 0,
        value: index,
      });
    }
  }

  ngOnInit(): void {

  }

}
