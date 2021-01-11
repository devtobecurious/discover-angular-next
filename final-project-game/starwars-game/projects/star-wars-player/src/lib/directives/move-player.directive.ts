import { Directive, ElementRef, HostListener, ɵɵtrustConstantResourceUrl } from '@angular/core';

@Directive({
  selector: '[libMove]'
})
export class MovePlayerDirective {
  private lastLeft: number = 0;

  constructor(private element: ElementRef) { }

  @HostListener('window:keydown', ['$event'])
  onKeyUp(event: KeyboardEvent) {
    let operator = 0;

    if (event.code == 'ArrowRight') {
      operator = 1;
    }

    if (event.code == 'ArrowLeft') {
      operator = -1;
    }

    this.lastLeft += operator;
    this.element.nativeElement.style.left = this.lastLeft + 'px';
  }

}
