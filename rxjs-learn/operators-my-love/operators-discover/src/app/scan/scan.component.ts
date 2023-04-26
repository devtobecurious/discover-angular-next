import { Component, ElementRef, ViewChild } from '@angular/core';
import { Subject, concatMap, delay, finalize, map, of, scan, tap } from 'rxjs';
import { NavigationAction, VoteAction } from './models';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.css']
})
export class ScanComponent {
  @ViewChild('options') options!: ElementRef;

  source$ = of(1, 2, 3, 4, 5).pipe(
    scan((acc, curr) => acc * curr, 1),
    concatMap(item => of(item).pipe(delay(1000))),
    tap(val => console.log('Accumulated value:', val)),
    finalize(() => console.info('Complete!'))
  );

  private subject = new Subject();
  acumulate$ = this.subject.pipe(
    scan((acc, curr) => Object.assign({}, acc, curr), {})
  );

  private voteActions$ = new Subject<VoteAction>();
  voteCount$ = this.voteActions$.pipe(
    scan((voteCount: { [option: string]: number }, action: VoteAction) => {
      const newCount = (voteCount[action.option] || 0) + 1;
      return {...voteCount, [action.option]: newCount };
    }, {}),
    map(voteCount => Object.keys(voteCount).map(option => ({ option, count: voteCount[option] })))
  );

  private navigationActions$ = new Subject<NavigationAction>();
  history$ = this.navigationActions$.pipe(
    scan((history: {items: string[]}, action: NavigationAction) => {
      const newHistory = {...history};

        switch (action.type) {
        case 'PUSH': {
          newHistory.items = [...newHistory.items, action.route];
        } break;

        case 'POP': {
          newHistory.items = newHistory.items.slice(0, -1);
        } break;
      }

      return newHistory;
    }, { items: []})
  );

  better01(): void {
    this.subject.next({ name: 'Chewie'});
  }

  better02(): void {
    this.subject.next({ weapon: { label: 'Blaster' }});
  }

  vote(): void {
    this.voteActions$.next({ option: this.options.nativeElement.value });
  }

  addHistory(): void {
    this.navigationActions$.next({ type: 'PUSH', route: `time-${Date.now()}`});
  }
}
