import { Component, input } from '@angular/core';

@Component({
  selector: 'app-input-test',
  standalone: true,
  imports: [],
  templateUrl: './input-test.component.html',
  styleUrl: './input-test.component.css'
})
export class InputTestComponent {
  title_ = input.required<string>();
  subTitle_ = input('sub title');
  h3Title_ = input<string>();
}
