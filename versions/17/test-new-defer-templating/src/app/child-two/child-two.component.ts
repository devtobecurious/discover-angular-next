import { Component } from '@angular/core';
import { ChildThreeComponent } from '../child-three/child-three.component';

@Component({
  selector: 'app-child-two',
  standalone: true,
  imports: [ChildThreeComponent],
  templateUrl: './child-two.component.html',
  styleUrl: './child-two.component.css'
})
export class ChildTwoComponent {

}
