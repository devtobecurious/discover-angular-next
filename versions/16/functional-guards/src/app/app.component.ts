import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainMenuComponent } from './shared/ui/menus/main-menu/main-menu.component';

@Component({
  standalone: true,
  imports: [
    RouterOutlet,
    MainMenuComponent
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'functional-guardds';
}
