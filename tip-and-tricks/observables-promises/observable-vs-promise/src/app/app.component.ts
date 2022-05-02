import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'observable-vs-promise';

  ngOnInit(): void {
    const promise = new Promise((resolve, reject) => {
      console.info('0. START');

      setTimeout(() => {
        console.info('setTimeout');
        resolve('anakin');
      }, (1500));

      console.info('0. END');
    });

    const callback = (item: any) => console.info(`1. ${item}`);
    promise.then(callback);

    const observable$ = new Observable(observer => {
      console.info('1. START');

      observer.complete();

      observer.next('luke');

      setTimeout(() => {
        console.info('1. setTimeout');
        observer.next('leia');
      }, (1500));


      console.info('1. END');
    });
    observable$.subscribe(callback);

    console.info('100. END OF APP');
  }



}
