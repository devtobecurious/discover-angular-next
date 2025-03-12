import { Injectable } from "@angular/core";
import { delay, finalize, Observable, of, tap } from "rxjs";

export interface OnePerson {
  name: string
}


@Injectable({providedIn: 'root'})
export class GetAllPersonList {
  private index = 0
  private intervalId: unknown

  getAll(): Observable<OnePerson[]> {
    console.info('getAllPersonList')

    const obs$ = new Observable<OnePerson[]>(subscriber => {
      this.intervalId = setInterval(() => {
        const persons: OnePerson[] = [
          { name: 'Luke' + this.index },
          { name: 'Leia' + this.index }
        ]
        console.info('setInterval get all persons', this.intervalId)
        subscriber.next(persons)

        this.index ++
      }, 1500);

      console.info('=== Interval id ===', this.intervalId)
    }).pipe(
      finalize(() => {
        if(typeof(this.intervalId) === 'number') {
          console.info('CLEARRRR')
          clearInterval(this.intervalId)
        }
      })
    )

    return obs$
  }
}
