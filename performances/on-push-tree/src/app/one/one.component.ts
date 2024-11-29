import { ChangeDetectionStrategy, Component, ElementRef, inject, NgZone, OnInit } from '@angular/core';
import { hightlight } from 'src/shared/tools/hightlight';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css'],
})
export class OneComponent implements OnInit {
  constructor(private el: ElementRef,private readonly zone: NgZone) {}

  ngOnInit(): void {
  }

  cdCheck() {
    // this.zone.runOutsideAngular(() => {
      hightlight('OneComponent', this.el);
    // })
  }

}
