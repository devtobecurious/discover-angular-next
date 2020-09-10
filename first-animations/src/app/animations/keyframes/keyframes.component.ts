import { HttpErrorResponse } from '@angular/common/http';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-keyframes',
  templateUrl: './keyframes.component.html',
  styleUrls: ['./keyframes.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({
        backgroundColor: 'green',
        color: 'white'
      })),
      state('close', style({
        backgroundColor: 'grey',
        color: 'black'
      })),
      state('close', style({
        backgroundColor: 'marroon',
        color: 'white'
      })),
      transition('void => *', [
        animate('0.5s', keyframes([
          style({
            backgroundColor: 'transparent',
            color: 'black'
          }),
          style({
            backgroundColor: 'grey',
            color: 'white'
          })  
        ]))
      ]),
      transition('* => void', [
        style({ height: '*'}),
        animate(250, style({ height: 0}))
      ]),
      transition('* => open', [
        animate('2s', keyframes([
          style({
            backgroundColor: 'yellow',
            color: 'black',
            offset: 0
          }),
          style({
            backgroundColor: 'orange',
            color: 'white',
            offset: 0.8
          }),
          style({
            backgroundColor: 'red',
            color: 'white',
            offset: 1
          })  
        ]))
      ])
    ])
  ]
})
export class KeyframesComponent implements OnInit {
  @Input()
  state: string;

  @ViewChild("content")
  content: ElementRef;

  constructor(private render: Renderer2, private currentElement:ElementRef) { }

  ngOnInit(): void {

  }

  remove() {
    this.render.removeChild(this.currentElement.nativeElement, this.content.nativeElement);
  }

}
