export interface City {
  latitude: number;
  longitude: number;
  name: string;
  geonameid: number;
}

export interface Cities {
  total_pages: number;
  cities: City[];
}

export interface Country {
  code: string;
  name: string;
}

export interface Countries {
  countries: Country[];
}

export type ApiCountries = {
  countries: {
    [key: string]: string
  }
}

export type ApiWeather = {
  current_weather: {
    temperature: number,
    windspeed: number,
    winddirection: number,
    weathercode: number
  }
}

export interface Weather {
  temperature: number;
  wind: {
    speed: number,
    direction: number
  },
  code: number
}
