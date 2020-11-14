import { jitOnlyGuardedExpression } from '@angular/compiler/src/render3/util';
import { fakeAsync, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { WookiesWithHttpManualService } from './wookies-with-http-manual.service';

describe('WookiesWithHttpManualService', () => {
  let service: WookiesWithHttpManualService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new WookiesWithHttpManualService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return 2 wookies', fakeAsync(() => {
    httpClientSpy.get.and.returnValues(of([
      { name: 'chewie' },
      { name: 'chewia' },
    ]));

    const wookies$ = service.getAll();
    wookies$.subscribe(items => {
      expect(items).toBeTruthy();
      expect(items).toBeInstanceOf(Array);
      expect(items.length).toBe(2);
    });

    expect(httpClientSpy.get.calls.count()).toBe(1);
  }));
});
