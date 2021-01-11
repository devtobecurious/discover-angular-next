import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { BehaviorSubject, interval, Observable } from 'rxjs';
import { concatMap, map, tap } from 'rxjs/operators';
import { Enemy, RealEnemy } from '../../../core/models/enemy';
import { ApplicationState } from '../../../store/reducers';
import * as fromEnemyActions from '../store/actions/enemy.actions';
import * as fromEnemySelectors from '../store/selectors/enemy.selector';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.sass']
})
export class GameComponent implements OnInit {
  enemies: Enemy[];

  constructor(private store: Store<ApplicationState>) { }

  ngOnInit(): void {
    this.store.dispatch(fromEnemyActions.loadEnemies());

    this.store.pipe(
      select(fromEnemySelectors.selectAllEnemies),
      map(items => items.map(item => new RealEnemy(item)))
    ).subscribe(
      items => {
        this.enemies = items;
        setInterval(() => {
          this.moveEnemies();
        }, 500);
      }
    );
  }

  moveEnemies() {
    this.enemies.forEach(enemy => {
      enemy.location.x += 1;
    });
  }

}
