import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-animations';
  maintState: 'close' | 'open' = 'close';

  constructor() { }

  ngOnInit(): void {
  }

  changeState(): void {
    if (this.maintState === 'close') {
      this.maintState = 'open';
    } else {
      this.maintState = 'close';
    }
  }
}
