import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestOne } from './test-one';

describe('TestOne', () => {
  let component: TestOne;
  let fixture: ComponentFixture<TestOne>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestOne],
    }).compileComponents();

    fixture = TestBed.createComponent(TestOne);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
