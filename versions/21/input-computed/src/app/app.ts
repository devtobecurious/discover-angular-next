import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Child } from "./child/child";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Child],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('input-computed');
}
