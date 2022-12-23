import { Directive } from '@angular/core';
import { ChangeColorDirective } from './change-color.directive';
import { HeightSizeDirective } from './height-size.directive';

@Directive({
  selector: '[appChangeColorHeight]',
  standalone: true,
  hostDirectives: [
    ChangeColorDirective,
    HeightSizeDirective
  ]
})
export class ChangeColorHeightDirective {

  constructor() { }

}
