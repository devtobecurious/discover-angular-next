import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { BannerComponent } from './banner.component';

describe('BannerComponent', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerComponent ],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the title', () => {
    expect(component).toBeTruthy();
    expect(component.title).toContain('Hello');

    const h1 = fixture.nativeElement.querySelector('h1');
    expect(h1).toBeTruthy();
    expect(h1.textContent).toContain('Hello');
  });

  it('should display the old title (even if it is changing)', () => {
    expect(component).toBeTruthy();
    expect(component.title).toContain('Hello');

    component.title = 'New';

    const h1 = fixture.nativeElement.querySelector('h1');
    expect(h1).toBeTruthy();
    expect(h1.textContent).toContain('Hello');
  });

  it('should display the new title ', () => {
    expect(component).toBeTruthy();
    expect(component.title).toContain('Hello');

    component.title = 'New';
    fixture.detectChanges();

    const h1 = fixture.nativeElement.querySelector('h1');
    expect(h1).toBeTruthy();
    expect(h1.textContent).toContain('New');
  });

  it('should find at least one div, in nativeElement', () => {
    const debugElement = fixture.debugElement;
    const element = debugElement.nativeElement;

    const foundDebugElement = debugElement.query((value) => value.name === 'div');
    const foundDebugElementBis = debugElement.query(By.css('div'));
    const foundElement = element.querySelector('div');

    expect(foundDebugElement).toBeTruthy();
    expect(foundDebugElementBis).toBeTruthy();
    expect(foundElement).toBeTruthy();
  });
});
