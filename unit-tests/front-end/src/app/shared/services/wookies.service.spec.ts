import { ExpansionCase } from '@angular/compiler';
import { TestBed } from '@angular/core/testing';
import { LoggerService } from './logger.service';
import { ToLowerService } from './to-lower.service';

import { WookiesService } from './wookies.service';

describe('WookiesService', () => {
  let service: WookiesService;

  beforeEach(() => {
    const lowerStub = jasmine.createSpyObj('ToLowerService', ['transform']);
    lowerStub.transform.and.returnValue('test');

    TestBed.configureTestingModule({
      providers: [
        { provide: ToLowerService, useValue: lowerStub }
      ]
    });
    service = TestBed.inject(WookiesService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return valid array', () => {
    expect(service.getAllAsArray()).toBeTruthy();
  });

  it('should return not empty array', () => {
    expect(service.getAllAsArray().length).toBeTruthy();
  });

  it('should return log as lowerCase', () => {
    const service2 = new WookiesService(new ToLowerService());

    const result = service.getAllAsArray();
    expect(result.length).toBeTruthy();
    result.forEach(item => { expect(item.name).toEqual(item.name.toLowerCase()); });
  });

  it('should use fake service ', () => {
    const service2 = new WookiesService({ transform(message: string): string { return message; }});

    const result = service2.getAllAsArray();
    expect(result.length).toBeTruthy();
    result.forEach(item => { expect(item.name).toEqual(item.name); });
  });

  it('should use stub service', () => {
    const lowerStub = jasmine.createSpyObj('ToLowerService', ['transform']);

    lowerStub.transform.and.returnValue('test');

    const service3 = new WookiesService(lowerStub);

    const result = service3.getAllAsArray();
    expect(result.length).toBeTruthy();
    result.forEach(item => { expect(item.name).toBe('test'); });

    expect(lowerStub.transform.calls.count()).toBe(result.length);
    expect(lowerStub.transform.calls.mostRecent().returnValue).toBe('test');
  });

  it('should use TestBed and inject', () => {
    const lowerService = TestBed.inject<ToLowerService>(ToLowerService);

    const result = service.getAllAsArray();
    expect(result.length).toBeTruthy();

    result.forEach(item => { expect(item.name).toBe('test'); });
  });
});
