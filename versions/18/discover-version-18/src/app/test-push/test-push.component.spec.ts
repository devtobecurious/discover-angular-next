import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPushComponent } from './test-push.component';

describe('TestPushComponent', () => {
  let component: TestPushComponent;
  let fixture: ComponentFixture<TestPushComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestPushComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestPushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
