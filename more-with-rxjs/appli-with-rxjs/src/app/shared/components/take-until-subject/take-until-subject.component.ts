import { takeUntil } from 'rxjs/operators';
import { TakeUntilService } from './../../services/take-until.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-take-until-subject',
  templateUrl: './take-until-subject.component.html',
  styleUrls: ['./take-until-subject.component.css']
})
export class TakeUntilSubjectComponent implements OnInit, OnDestroy {
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private takeUntil: TakeUntilService) { }

  ngOnInit(): void {
    this.takeUntil.run().pipe(takeUntil(this.destroy$)).subscribe();
  }
  
  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
