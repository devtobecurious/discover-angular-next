import { CommonModule } from '@angular/common';
import { Directive, NgModule } from '@angular/core';

@Directive({
  selector: '[appTestColor]',
  host: { 'style': 'color: yellow'},
  standalone: true
})
export class TestColorDirective {

  constructor() { }

}

// @NgModule({
//   declarations: [
//     TestColorDirective
//   ],
//   imports: [
//     CommonModule
//   ],
//   exports: [
//     TestColorDirective
//   ]
// })
// export class TestColorModule { }
