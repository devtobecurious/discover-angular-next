import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TroisComponent } from './trois.component';

describe('TroisComponent', () => {
  let component: TroisComponent;
  let fixture: ComponentFixture<TroisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TroisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TroisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
