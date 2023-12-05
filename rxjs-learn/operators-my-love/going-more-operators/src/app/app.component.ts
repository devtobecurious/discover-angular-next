import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { combineLatest } from 'rxjs';
import { CombineLatestComponent } from './learning/combine-latest/combine-latest.component';
import { WeatherLoadingComponent } from './learning/weather-loading/weather-loading.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CombineLatestComponent, WeatherLoadingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'going-more-operators';
}
