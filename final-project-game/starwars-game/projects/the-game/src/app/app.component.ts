import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'the-game';

  @HostListener('window:keyup', ['$event'])
  onKeyUp(event: KeyboardEvent) {
    console.info('kniiii');
  }
}
