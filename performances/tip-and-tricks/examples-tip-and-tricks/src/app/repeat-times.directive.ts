import { Directive, Inject, Input, TemplateRef, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

const MAX_VALUE = 0x10000; // Binary value : 65 536

export class RepeatTimesContext {
  constructor(readonly $implicit: number) {}
}

@Directive({
  selector: '[repeatTimes][repeatTimesOf]'
})
export class RepeatTimesDirective {
  @Input()
  set repeatTimesOf(array: Array<number>) {
    const safeCount = Math.floor(Math.max(0, Math.min(array.length, MAX_VALUE)));
    // https://stackoverflow.com/questions/25187903/what-do-curly-braces-around-javascript-variable-name-mean
    const { length } = this.viewContainer;

    if (safeCount < length) {
      this.removeContainers(length - safeCount);
    } else {
      this.addContainers(length, safeCount);
    }
  }


  constructor(
    @Inject(ViewContainerRef) private readonly viewContainer: ViewContainerRef,
    @Inject(TemplateRef) private readonly templateRef: TemplateRef<RepeatTimesContext>
  ) { }

  private addContainers(length: number, count: number): void {
    for (let index = length; index < count; index ++) {
      this.viewContainer.createEmbeddedView<RepeatTimesContext>(
        this.templateRef,
        new RepeatTimesContext(index)
      );
    }
  }

  private removeContainers(amount: number): void {
    for (let index = 0; index < amount; index ++) {
      this.viewContainer.remove();
    }
  }
}
