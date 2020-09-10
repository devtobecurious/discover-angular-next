import { trigger, transition, style, query, animateChild, group, animate } from '@angular/animations';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routeAnimations', [
      transition('Component1 <=> Component2', [
        style({position: 'relative'}),
        query(':enter, :leave', 
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
          })
        ),
        query(':enter', [
          style({ left: '-100%' })
        ]),
        query(':leave', animateChild()),
        group([
          query(':leave', [
            animate('300ms ease-out', style({ left: '100%' }))
          ]),
          query(':enter', [
            animate('300ms ease-out', style({ left: '0%' }))
          ])
        ]),
        query(':enter', animateChild()),
      ]),
      transition('* => Component1', [
        style({position: 'relative'}),
        query(':enter, :leave', 
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
          })
        ),
        query(':enter', [
          style({ left: '-100%' })
        ]),
        query(':leave', animateChild()),
        group([
          query(':leave', [
            animate('200ms ease-out', style({ left: '100%' }))
          ]),
          query(':enter', [
            animate('300ms ease-out', style({ left: '0%' }))
          ])
        ]),
        query(':enter', animateChild()),
      ])
    ])
  ]
})
export class AppComponent {
  title = 'first-animations';
  maintState: 'close' | 'open' = 'close';

  constructor() { }

  ngOnInit(): void {
  }

  changeState(): void {
    if (this.maintState === 'close') {
      this.maintState = 'open';
    } else {
      this.maintState = 'close';
    }
  }

  prepareRoute(outlet: RouterOutlet) {
    console.log(outlet, outlet.activatedRouteData);
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
