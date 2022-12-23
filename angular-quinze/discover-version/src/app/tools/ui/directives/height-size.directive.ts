import { Directive } from '@angular/core';

@Directive({
  selector: '[appHeightSize]',
  host: { 'style': 'height: 30%'},
  standalone: true
})
export class HeightSizeDirective {

  constructor() { }

}
