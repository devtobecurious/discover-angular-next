import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.ng.html',
  styleUrl: './app.css'
})
export class App {
  title = 'ngrx-signal-without-effect';
}
