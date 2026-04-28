import { Component, resource, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('discover-debounced');

  protected readonly getCurrentWeather = resource({
    loader: async () => {
      const response = await fetch('https://api.weather.gov/gridpoints/MPX/107,71/forecast');
      const data = await response.json();
      return data.properties.periods[0].temperature;
    }
  })
}
