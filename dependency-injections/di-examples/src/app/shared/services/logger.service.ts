import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  log(message: string, obj?: unknown) {
    console.info(message, obj);
  }
}
