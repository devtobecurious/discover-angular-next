export interface Weather {
  time: string;
  temperature_2m: number;
  wind_speed_10m: number;
}

export type WeatherResponseApi = {
   current: Weather
}
