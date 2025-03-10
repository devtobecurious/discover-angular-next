import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

export interface OnePerson {
    name: string
}

@Injectable({
  providedIn: 'root'
})
export class GetAllPerson {
  getAll(): Observable<OnePerson[]> {
    return new Observable<OnePerson[]>(subscriber => {
      setInterval(() => {
        console.info('setInterval')
        subscriber.next([{name: 'toto'}, {name: 'tata'}])
      }, 1000)
    })

  }
}
