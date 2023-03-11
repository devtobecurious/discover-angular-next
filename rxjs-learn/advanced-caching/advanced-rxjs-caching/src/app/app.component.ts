import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainMenuComponent } from './shared/ui/layout/main-menu/main-menu.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    RouterOutlet,
    MainMenuComponent
  ]
})
export class AppComponent {
  title = 'advanced-rxjs-caching';
}
