import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MigrationTestingComponent } from './migration-testing.component';

describe('MigrationTestingComponent', () => {
  let component: MigrationTestingComponent;
  let fixture: ComponentFixture<MigrationTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MigrationTestingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MigrationTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
