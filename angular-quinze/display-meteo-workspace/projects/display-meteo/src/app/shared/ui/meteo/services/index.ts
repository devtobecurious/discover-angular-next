import { Observable } from "rxjs";
import { MeteoApiResult } from "../models";
import { inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";

export const getCurrentRawMeteo = (): Observable<MeteoApiResult> => {
  const httpClient = inject(HttpClient);
  const apiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=47.21270751953125&longitude=-1.5559659004211426&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m';

  return httpClient.get<MeteoApiResult>(apiUrl);
}
