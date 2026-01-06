import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSignalForm } from './test-signal-form';

describe('TestSignalForm', () => {
  let component: TestSignalForm;
  let fixture: ComponentFixture<TestSignalForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestSignalForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestSignalForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
