import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, combineLatest, delay, forkJoin, of, tap } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { getPeopleAndPlanets } from './services';

@Component({
  selector: 'app-fork-join',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './fork-join.component.html',
  styleUrls: ['./fork-join.component.css']
})
export class ForkJoinComponent {
  waitingTime = 1000;
  changeTime$ = new BehaviorSubject<number>(this.waitingTime);

  data$ = forkJoin([
    of(1, 2, 3).pipe(delay(2000)),
    of(4, 5, 6).pipe(delay(1000)),
    of(7, 8)
  ]);

  starwars$ = getPeopleAndPlanets();


  changeTime(): void {
    this.changeTime$.next(this.waitingTime);
  }
}
