import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TestOne],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'test-vvingt';
}
