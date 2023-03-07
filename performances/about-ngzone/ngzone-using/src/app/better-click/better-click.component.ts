import { AfterViewChecked, AfterViewInit, Component, ElementRef, NgZone, Renderer2, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-better-click',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './better-click.component.html',
  styleUrls: ['./better-click.component.css']
})
export class BetterClickComponent implements AfterViewInit, AfterViewChecked {
  private readonly zone = inject(NgZone);
  private readonly renderer = inject(Renderer2);
  text = 'Ah que johny';

  @ViewChild("btn") btnElement !: ElementRef<HTMLButtonElement>;

  click(): void {

  }

  ngAfterViewInit() {
    this.setupClickListener();
  }

  ngAfterViewChecked() {
    console.log("CD performed");
  }

  private setupClickListener() {
    this.zone.runOutsideAngular(() => {
      // this.setupClickListenerViaNativeAPI();
      this.setupClickListenerViaRxjs();
    });
  }

  private setupClickListenerViaNativeAPI() {
    this.btnElement.nativeElement.addEventListener("click", () => {
      console.log("onClick");
    });
  }

  private setupClickListenerViaRxjs() {
    fromEvent(this.btnElement.nativeElement, 'click').subscribe(() => {
      console.log('onClick');
      this.text = 'Oh yeahh';

      setTimeout(() => {
        this.zone.run(() => console.info('oh yeah'));
      }, 1000);
    });
  }
}
