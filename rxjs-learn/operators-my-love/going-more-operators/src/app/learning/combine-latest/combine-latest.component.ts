import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, Subject, combineLatest, delay, of, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-combine-latest',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './combine-latest.component.html',
  styleUrl: './combine-latest.component.css'
})
export class CombineLatestComponent {
  private start$ = new Subject<void>();
  private weight$ = new Observable(observer => { observer.next(1); observer.next(2); console.info('011') }).pipe(delay(1500));
  private height$ = of(1.76, 1.77, 1.78).pipe(tap(item => console.info('002', item)),delay(0));

  combine$ = combineLatest({
    weight: this.weight$,
    height: this.height$
  });

  results$ = this.start$.pipe(
    switchMap(() => this.combine$)
  );

  startCombine(): void {
    this.start$.next();
  }
}
