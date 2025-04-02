import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainMenu } from './shared/uis/menus/main-menu/main-menu';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainMenu],
  templateUrl: './app.ng.html',
  styleUrl: './app.css'
})
export class App {

}
