import { fakeAsync, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { WookiesWithHttpService } from './wookies-with-http.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

describe('WookiesWithHttpService', () => {
  let service: WookiesWithHttpService;
  let httpClient: HttpClient;
  let httpMock: HttpTestingController;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(WookiesWithHttpService);
    httpClient = TestBed.inject(HttpClient);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return wookies', fakeAsync(() => {
    const result = service.getAll();

    expect(result).toBeTruthy();

    result.subscribe(items => {
      expect(items).toBeTruthy();
      expect(items.length).toBeGreaterThan(0, 'Gets more than 0 wookies');
    });

    const testRequest = httpMock.expectOne(environment.apis.wookies.url);
    expect(testRequest.request.url).toBe(environment.apis.wookies.url);
    expect(testRequest.request.method).toBe('GET');
  }));
});
