import { Component } from '@angular/core';

@Component({
  selector: 'app-check-three',
  templateUrl: './check-three.component.html',
  styleUrls: ['./check-three.component.css']
})
export class CheckThreeComponent {
  ngAfterViewChecked(): void {
    console.info('View checked', this);

    // this.title = 'hello checked'; // never update template here or use chenge detector changes
    // this.detector.detectChanges();
  }
}
