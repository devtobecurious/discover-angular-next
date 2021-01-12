import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { BehaviorSubject, interval, Observable, Subject } from 'rxjs';
import { concatMap, map, takeUntil, tap } from 'rxjs/operators';
import { Enemy, RealEnemy } from '../../../core/models/enemy';
import { ApplicationState } from '../../../store/reducers';
import * as fromEnemyActions from '../store/actions/enemy.actions';
import * as fromEnemySelectors from '../store/selectors/enemy.selector';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.sass']
})
export class GameComponent implements OnInit, OnDestroy {
  enemies: Enemy[];
  isStop$: Subject<boolean> = new Subject();

  constructor(private store: Store<ApplicationState>) { }

  ngOnDestroy(): void {
    this.isStop$.next(true);
    this.isStop$.unsubscribe();
  }

  ngOnInit(): void {
    this.store.dispatch(fromEnemyActions.loadEnemies());

    // first version, without alter the ngrx state
    this.store.pipe(
      select(fromEnemySelectors.selectAllEnemies)
    ).pipe(takeUntil(this.isStop$)).subscribe(
      items => {
        console.info('subscribe');
        this.enemies = items;
      }
    );

    interval(500).pipe(takeUntil(this.isStop$)).subscribe(
      item => {
        this.store.dispatch(fromEnemyActions.moveEnemies());
      }
    );
  }

}
