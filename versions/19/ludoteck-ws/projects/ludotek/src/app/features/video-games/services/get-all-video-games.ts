import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VideoGameResponse } from '../models/video-game';

@Injectable({
  providedIn: 'root'
})
export class GetAllVideoGames {
  private readonly httpClient = inject(HttpClient)

  getAll(): Observable<VideoGameResponse> {
    return this.httpClient.get<VideoGameResponse>('https://swapi.dev/api/films')
  }
}
