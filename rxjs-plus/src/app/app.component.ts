import { OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { Component } from '@angular/core';
import { from, fromEvent, interval, Observable, of } from 'rxjs';
import { concatMap, delay, mergeMap, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'rxjs-plus';

  @ViewChild('clickButton', { static: false }) button;
  clicks$: Observable<any>;

  ngAfterViewInit() {
    this.clicks$ = fromEvent(this.button.nativeElement, 'click');

    this.clicks$.pipe(
      switchMap(item => interval(500))
    ).subscribe(item => console.info('click --->', item))


    // Le concat map ne fait rien ici, tant que le premier enfant ne fait pas de complete
    // this.clicks$.pipe(
    //   concatMap(item => interval(500))
    // ).subscribe(item => console.info('click --->', item))

    // Le merge map garde les observables ouvertes
    // this.clicks$.pipe(
    //   mergeMap(item => interval(500))
    // ).subscribe(item => console.info('click --->', item))
  }

  ngOnInit(): void {

    const getData = (param) => {
      return of(`retrieved new data with param ${param}`).pipe(
        delay(1000)
      )
    };

    from([1, 2, 3, 4]).pipe(
      tap(item => console.info('SWITCHMAP \n before => ', item)),
      switchMap(item => getData(item)),
      tap(item => console.info('SWITCHMAP \n after => ', item))
    ).subscribe(item => console.info('SWITCHMAP \n end => ', item))

    from([1, 2, 3, 4]).pipe(
      tap(item => console.info('MERGEMAP \n before => ', item)),
      mergeMap(item => getData(item)),
      tap(item => console.info('MERGEMAP \n after => ', item))
    ).subscribe(item => console.info('MERGEMAP \n end => ', item))

    from([1, 2, 3, 4]).pipe(
      tap(item => console.info('CONCATMAP \n before => ', item)),
      concatMap(item => getData(item)),
      tap(item => console.info('CONCATMAP \n after => ', item))
    ).subscribe(item => console.info('CONCATMAP \n end => ', item))

  }
}
