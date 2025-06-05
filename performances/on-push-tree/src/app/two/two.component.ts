import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, inject, Input, NgZone, OnInit, ViewEncapsulation } from '@angular/core';
import { of } from 'rxjs';
import { hightlight } from 'src/shared/tools/hightlight';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom
})
export class TwoComponent implements OnInit {

  // @Input() client !: {name: string, surname: string}

  ngOnInit(): void {
    this.cd.detach();
    // of([]).subscribe({
    //   next: item => this.cd.markForCheck()
    // })
    this.cd.reattach()
  }

  constructor(private el: ElementRef, public cd: ChangeDetectorRef) { }

  cdCheck() {
    //this.zone.runOutsideAngular(() => {
      hightlight('TwoComponent', this.el);
    // })
  }

  //does not work for all the cases
  ngDoCheck() {
    console.log('ngDoCheck');
  }

  //does not work for all the cases
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked')
  }

}
