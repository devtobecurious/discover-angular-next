import { state, style, trigger, transition, animate } from '@angular/animations';
import { Component, HostBinding, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-my-lib',
  templateUrl: 'my-lib.component.html',
  styles: [`
  :host {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: #009cff;
    height: 48px;
    padding: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid black;
    font-size: 24px;
  }

  button {
    border-radius: 50%;
  }
`
  ],
  animations: [
    trigger('state', [
      state('opened', style({transform: 'translateY(0%)'})),
      state('void, closed', style({transform: 'translateY(100%)', opacity: 0})),
      transition('* => *', animate('100ms ease-in')),
    ])
  ]
})
export class MyLibComponent implements OnInit {
  private _message: string = '';

  @HostBinding('@state')
  state: 'opened' | 'closed' = 'closed';

  @Output()
  closed = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }



  @Input()
  get message(): string { return this._message; }
  set message(message: string) {
    this._message = message;
    this.state = 'opened';
  }

}
