import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { List } from './features/video-games/components/list/list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, List],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'testing-ludoteck';
}
