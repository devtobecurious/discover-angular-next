import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JohnyComponent } from './johny.component';

describe('JohnyComponent', () => {
  let component: JohnyComponent;
  let fixture: ComponentFixture<JohnyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JohnyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JohnyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
