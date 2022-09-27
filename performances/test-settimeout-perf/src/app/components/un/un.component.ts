import { Component, ElementRef, OnChanges, OnInit, SimpleChanges, Input } from '@angular/core';
import { executeLater, logInfo } from 'src/app/shared/utils';

@Component({
  selector: 'app-un',
  templateUrl: './un.component.html',
  styleUrls: ['./un.component.css']
})
export class UnComponent {

  @Input() item = 0;

  constructor(private el: ElementRef) { }

  execute(): void {
    executeLater(this);
  }

  check(): void {
    setTimeout(() => {

    }, 0);

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
