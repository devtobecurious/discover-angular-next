import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeuxComponent } from './deux.component';

describe('DeuxComponent', () => {
  let component: DeuxComponent;
  let fixture: ComponentFixture<DeuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeuxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
