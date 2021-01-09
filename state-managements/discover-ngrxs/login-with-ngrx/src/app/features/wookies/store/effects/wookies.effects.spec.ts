import { fakeAsync, flush, TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Observable, of } from 'rxjs';
import { Action } from 'rxjs/internal/scheduler/Action';
import { ApplicationState } from 'src/app/core/store/reducers';
import { WookiesActions } from '../actions/actions-types';
import { WookiesEffect } from './wookies.effects';

describe('Wookies.Effects', () => {
  let actions$ = new Observable<any>();
  let store: MockStore<ApplicationState>;
  let effects: WookiesEffect;



  beforeEach(() => {
    console.info('Wookies.Effects');
    TestBed.configureTestingModule({
      providers: [
        WookiesEffect,
        provideMockStore(),
        provideMockActions(() => actions$)
      ],
    });

    effects = TestBed.inject(WookiesEffect);
    store = TestBed.inject(MockStore);
  });

  it('should run', fakeAsync((done) => {
    actions$ = of(WookiesActions.loadAllWookies);
    effects.loadWookies$.subscribe((res) => {
      expect(res).toBeTruthy();
    });

    flush();
  }));
});
