import { Component, OnInit } from '@angular/core';
import { EnemyType } from './models/enemy-type';
import imageUrls from './models/images-urls';
import { Coordinate } from './models/coordinate';

@Component({
  selector: 'lib-star-wars-enemy',
  templateUrl: './star-wars-enemy.component.html',
  styles: [
  ]
})
export class StarWarsEnemyComponent implements OnInit {
  type: EnemyType;
  imageUrl: string;

  coordinate: Coordinate = {
    x: 0,
    y: 0
  };

  constructor() { }

  ngOnInit(): void {
    let index = 0;

    if (this.type == EnemyType.trooper) {
      index = 1
    }

    this.imageUrl = `url('${imageUrls[index]}')`;
  }



}
