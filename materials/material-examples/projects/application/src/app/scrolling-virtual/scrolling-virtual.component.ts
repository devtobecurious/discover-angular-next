import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-scrolling-virtual',
  templateUrl: './scrolling-virtual.component.html',
  styleUrls: ['./scrolling-virtual.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScrollingVirtualComponent implements OnInit {
  private sub = new Subscription();
  scrollIndex = 0;
  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);

  @ViewChild(CdkVirtualScrollViewport) viewport !: CdkVirtualScrollViewport;

  constructor() { }

  ngOnInit(): void {
  }

  goTo() {
    //this.viewport.scrollToIndex(this.scrollIndex, 'smooth');
  }

  scrolledIndexChange(firstVisibleElementIndex: number) {
    console.info('scroll => ', firstVisibleElementIndex);
  }
}
