import { Component } from '@angular/core';

@Component({
  selector: 'app-check-two',
  templateUrl: './check-two.component.html',
  styleUrls: ['./check-two.component.css']
})
export class CheckTwoComponent {
  ngAfterViewChecked(): void {
    console.info('View checked', this);

    // this.title = 'hello checked'; // never update template here or use chenge detector changes
    // this.detector.detectChanges();
  }
}
