import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  public content: BehaviorSubject<string> = new BehaviorSubject('');

  constructor() { }

  search(event: any) {
    this.content.next(event.target.value);
  }
}
