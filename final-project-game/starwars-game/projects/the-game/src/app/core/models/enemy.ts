import { interval } from "rxjs";
import { EnemiesEffect } from "../../features/games/store/effects/enemies.effects";

export interface Enemy {
  type: string;
  name: string;
  location: {x: number, y: number};
}

export class RealEnemy implements Enemy {
  type: string;
  name: string;
  location: { x: number; y: number; };

  constructor(item: Enemy) {
    this.name = item.name;
    this.type = item.type;
    this.location = { x: item.location.x, y: item.location.y };
  }
}
