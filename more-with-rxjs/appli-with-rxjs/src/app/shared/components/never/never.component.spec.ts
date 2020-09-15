import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeverComponent } from './never.component';

describe('NeverComponent', () => {
  let component: NeverComponent;
  let fixture: ComponentFixture<NeverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
