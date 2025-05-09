import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestOnLib } from './test-on-lib';

describe('TestOnLib', () => {
  let component: TestOnLib;
  let fixture: ComponentFixture<TestOnLib>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestOnLib]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestOnLib);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
