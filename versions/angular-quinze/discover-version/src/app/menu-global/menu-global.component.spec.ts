import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuGlobalComponent } from './menu-global.component';

describe('MenuGlobalComponent', () => {
  let component: MenuGlobalComponent;
  let fixture: ComponentFixture<MenuGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MenuGlobalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
