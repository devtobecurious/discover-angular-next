import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForkJoinComponent } from './fork-join.component';

describe('ForkJoinComponent', () => {
  let component: ForkJoinComponent;
  let fixture: ComponentFixture<ForkJoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ForkJoinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForkJoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
