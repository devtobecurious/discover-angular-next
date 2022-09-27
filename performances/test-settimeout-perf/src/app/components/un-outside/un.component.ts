import { Component, ElementRef, OnChanges, OnInit, SimpleChanges, Input, NgZone } from '@angular/core';
import { executeLater, logInfo } from 'src/app/shared/utils';

@Component({
  selector: 'app-un-outside',
  templateUrl: './un.component.html',
  styleUrls: ['./un.component.css']
})
export class UnOutsideComponent {

  @Input() item = 0;

  constructor(private el: ElementRef, private zone: NgZone) { }

  execute(): void {
    executeLater(this);
  }

  check(): void {
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {

      }, 0);
    });


    // const a = this.el.nativeElement.querySelector('a');
    // a.style.color = 'yellow';
    // console.info('check 0');
    // //setTimeout(() => {
    // a.style.color = 'black';
    // console.info('check 1');
    //}, 1000);
  }

  ngOnChanges(changes: SimpleChanges): void {
    logInfo('UnComponent: Changes', changes);
  }

  ngOnInit(): void {
    logInfo('UnComponent: Init');
  }

}
