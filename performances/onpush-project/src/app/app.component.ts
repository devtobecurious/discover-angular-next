import { Component, OnInit } from '@angular/core';
import { Tile } from './features/mastermind/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'onpush-project';
  tiles: Tile[] = [];

  constructor() {

  }

  ngOnInit(): void {

  }

}
