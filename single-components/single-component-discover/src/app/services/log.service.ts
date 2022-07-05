import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() {
    this.log('LogService.constructor()');
  }

  log(message: string, ...objects: any[]) {
    console.info(message, ...objects);
  }
}
