import { async, fakeAsync, flush, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { tap, toArray } from 'rxjs/operators';

import { TestingObservableService } from './testing-observable.service';

describe('TestingObservableService', () => {
  let service: TestingObservableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestingObservableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all elements (async)', waitForAsync(() => {
    const ingredients = [];

    service.getAll().pipe(
      toArray()
    ).subscribe(items => {
      expect(items).toBeTruthy();
      expect(items.length).toBe(5);
    });
  }));

  it('should get all elements (fakeAsync)', fakeAsync(() => {
    const ingredients = [];

    const subs = service.getAll().pipe(
      toArray()
    ).subscribe(items => {
      expect(items).toBeTruthy();
      expect(items.length).toBe(5);
    });

    tick(6000);
     //const time = flush(); => generates this warning : "has no expectations".
     // console.log(time);


    subs.unsubscribe();
  }));
});
