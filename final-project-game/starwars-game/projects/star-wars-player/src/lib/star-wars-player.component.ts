import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-star-wars-player',
  templateUrl: 'star-wars-player.component.html',
  styles: [
  ]
})
export class StarWarsPlayerComponent implements OnInit {
  coordinate = {
    x: 0
  };

  constructor() { }

  ngOnInit(): void {
  }

}
