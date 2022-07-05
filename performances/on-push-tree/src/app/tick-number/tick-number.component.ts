import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tick-number',
  templateUrl: './tick-number.component.html',
  styleUrls: ['./tick-number.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush // Put push to see the changes
})
export class TickNumberComponent implements OnInit {
  numberOfTicks = 0;

  constructor(private ref: ChangeDetectorRef) {
    // setInterval(() => {
    //   this.numberOfTicks ++
    //   // the following is required, otherwise the view will not be updated
    //   // this.ref.markForCheck();
    //   this.ref.detectChanges();
    // }, 1000);
  }

  ngDoCheck() {
    console.info('TickNumberComponent, ngDoCheck');
  }

  ngOnInit(): void {
  }

}
