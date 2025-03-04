import { JsonPipe } from '@angular/common';
import { httpResource } from '@angular/common/http';
import { Component, computed, OnInit } from '@angular/core';

type WeatherApi = {
  current: {
    temperature_2m: number,
    wind_speed_10m: number
  }
}
const url = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [JsonPipe]
})
export class AppComponent implements OnInit {
  weatherResource = httpResource<WeatherApi>(url, {
  })

  ngOnInit(): void {
    // const weatherResourceBis = httpResource<WeatherApi>(url, {
    // })

    const result = computed(() => this.weatherResource.value())
  }
  title = 'test-v19-resources';


}
