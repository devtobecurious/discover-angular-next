import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromStore from '../reducers/index';
import { counterSelector } from '../store/selectors/counter.selector';

@Component({
  selector: 'app-display-counter',
  templateUrl: './display-counter.component.html',
  styleUrls: ['./display-counter.component.css']
})
export class DisplayCounterComponent implements OnInit {
  count$: Observable<number> | null;

  constructor(private store: Store<fromStore.State>) { }

  ngOnInit(): void {
    this.count$ = this.store.pipe(select(counterSelector))
  }

}
