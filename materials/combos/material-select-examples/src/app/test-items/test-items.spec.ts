import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestItems } from './test-items';

describe('TestItems', () => {
  let component: TestItems;
  let fixture: ComponentFixture<TestItems>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestItems]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestItems);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
