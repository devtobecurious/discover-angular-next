import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadSignalsComponent } from './read-signals.component';

describe('ReadSignalsComponent', () => {
  let component: ReadSignalsComponent;
  let fixture: ComponentFixture<ReadSignalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ReadSignalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadSignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
