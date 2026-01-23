import { Component, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { RouterOutlet } from '@angular/router';
import { initValue } from './models/storm';
import { MainMenu } from './main-menu/main-menu';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormField, MainMenu],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('change-v21-1');
  protected readonly storm = signal(initValue);
  protected readonly stormForm = form(this.storm);
  protected readonly stormTypes = ['Hurricane', 'Tornado', 'Thunderstorm', 'Blizzard'];
}
