import { AfterViewChecked, ChangeDetectorRef, Component, NgZone, inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked {
  private readonly ngZone = inject(NgZone);
  private readonly detector = inject(ChangeDetectorRef);

  title = 'hello';

  ngOnInit(): void {
    
  }

  ngAfterViewChecked(): void {
    console.info('View checked', this);

    // this.title = 'hello checked'; // never update template here or use chenge detector changes
    // this.detector.detectChanges();
  }

  get randomValue(): number {
    return Math.random(); /// generate error when using in template
  }
}
