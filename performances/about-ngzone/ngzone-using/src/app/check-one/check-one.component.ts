import { Component } from '@angular/core';

@Component({
  selector: 'app-check-one',
  templateUrl: './check-one.component.html',
  styleUrls: ['./check-one.component.css']
})
export class CheckOneComponent {
  ngAfterViewChecked(): void {
    console.info('View checked', this);

    // this.title = 'hello checked'; // never update template here or use chenge detector changes
    // this.detector.detectChanges();
  }
}
