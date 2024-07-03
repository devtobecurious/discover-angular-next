import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildByRouteOneComponent } from './child-by-route-one.component';

describe('ChildByRouteOneComponent', () => {
  let component: ChildByRouteOneComponent;
  let fixture: ComponentFixture<ChildByRouteOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildByRouteOneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildByRouteOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
