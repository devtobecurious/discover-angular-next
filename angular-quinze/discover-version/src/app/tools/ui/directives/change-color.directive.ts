import { Directive } from '@angular/core';

@Directive({
  selector: '[appChangeColor]',
  host: { 'style': 'color: red'},
  standalone: true
})
export class ChangeColorDirective {

  constructor() { }

}
