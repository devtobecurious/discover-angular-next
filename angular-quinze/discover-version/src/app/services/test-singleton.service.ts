import { Injectable } from '@angular/core';

let id = 0;

@Injectable({
  providedIn: 'root'
})
export class TestSingletonService {
  identity = 0;

  constructor() {
    this.identity = id ++;
    console.info('TestSingletonService', this.identity);
  }
}
