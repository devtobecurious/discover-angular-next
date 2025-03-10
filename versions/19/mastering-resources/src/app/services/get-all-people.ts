import { Injectable } from "@angular/core";
import { finalize, Observable } from "rxjs";

export interface OnePerson {
    name: string
}

@Injectable({
  providedIn: 'root'
})
export class GetAllPerson {
  private idObservable = 0
  private idInterval !: any

  getAll(): Observable<OnePerson[]> {
    console.info('AAAAA')

    return new Observable<OnePerson[]>(subscriber => {
      let i = 0

      this.idObservable ++

      const id = setInterval(() => {
        console.info('setInterval => ' + id + ' / id obs :' + this.idObservable)
        subscriber.next([{name: 'toto '  + id + ' => ' + i }, {name: 'tata'}])
        i ++
      }, 1000)

      this.idInterval = id
    }).pipe(
      finalize(() => {
        console.info('finalize !!')
        clearInterval(this.idInterval)
      })
    )

  }
}
