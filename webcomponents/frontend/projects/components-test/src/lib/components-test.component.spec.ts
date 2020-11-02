import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsTestComponent } from './components-test.component';

describe('ComponentsTestComponent', () => {
  let component: ComponentsTestComponent;
  let fixture: ComponentFixture<ComponentsTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentsTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
