import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  log(message: string, object?: any): string {
    const result = message.toLowerCase()
    console.log(result);

    return result;
  }
}
