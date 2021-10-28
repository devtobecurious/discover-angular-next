import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Configuration } from './config';

@Injectable({
  providedIn: 'root'
})
export class ConfigLoaderService {
  private readonly URL = './assets/config.json';
  config !: Configuration;

  constructor(private httpClient: HttpClient) { }

  load() {
    return this.httpClient.get<Configuration>(this.URL)
                          .toPromise()
                          .then( (item: Configuration) => {
                            this.config = item;

                            return item;
                          });
  }
}
