import { Component, computed, input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    console.info('ngOnChanges called with changes:', changes);
  }
  item = input.required<string>();
  computedItem = computed(() => {
    console.info('computedItem changed:', this.item());

    return this.item().toUpperCase();
  })
}
