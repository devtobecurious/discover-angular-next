import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { WookiesWithHttpService } from './wookies-with-http.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

describe('WookiesWithHttpService', () => {
  let service: WookiesWithHttpService;
  let httpClient: HttpClient;
  let httpMock: HttpTestingController;

  let mockResult = [
    { name: 'chewie' },
    { name: 'chewa' }
  ];

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(WookiesWithHttpService);
    httpClient = TestBed.inject(HttpClient);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return wookies', fakeAsync(() => {
    const result = service.getAll();

    expect(result).toBeTruthy();

    console.log('1');

    tick();

    console.log('2');
    result.subscribe(items => {
      console.log('3');
      expect(items).toBeTruthy();
      console.log('---> ', items.length);

      expect(items.length).toBeGreaterThan(0, 'Gets more than 0 wookies');
    });

    const testRequest = httpMock.expectOne(environment.apis.wookies.url);
    expect(testRequest.request.url).toBe(environment.apis.wookies.url);
    expect(testRequest.request.method).toBe('GET');

    testRequest.flush(mockResult);
  }));
});
