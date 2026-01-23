import { Routes } from "@angular/router";
import { DisplayWeather } from "./components/display-weather/display-weather";

export const weatherRouters: Routes = [
  {
    path: '',
    component:  DisplayWeather
  }
]
