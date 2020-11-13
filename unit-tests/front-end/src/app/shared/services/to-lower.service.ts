import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToLowerService {

  constructor() { }

  transform(message: string): string {
    return message.toLowerCase();
  }
}
