import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TetsOne } from './tets-one';

describe('TetsOne', () => {
  let component: TetsOne;
  let fixture: ComponentFixture<TetsOne>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TetsOne]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TetsOne);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
