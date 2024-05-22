import { Component } from '@angular/core';
import { ChildFourInsideLazyLoadComponent } from '../child-four-inside-lazy-load/child-four-inside-lazy-load.component';

@Component({
  selector: 'app-child-by-route-one',
  standalone: true,
  imports: [ChildFourInsideLazyLoadComponent],
  templateUrl: './child-by-route-one.component.html',
  styleUrl: './child-by-route-one.component.css'
})
export class ChildByRouteOneComponent {

}
