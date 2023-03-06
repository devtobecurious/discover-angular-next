import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableWithCssComponent } from './table-with-css.component';

describe('TableWithCssComponent', () => {
  let component: TableWithCssComponent;
  let fixture: ComponentFixture<TableWithCssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableWithCssComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableWithCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
