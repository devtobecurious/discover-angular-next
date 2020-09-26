import { ComponentFixture, fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WeaponService } from 'src/app/shared/services/weapon.service';

import { AddComponent } from './add.component';

describe('AddComponent', () => {
  let component: AddComponent;
  let fixture: ComponentFixture<AddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AddComponent
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
      ],
      providers: [
        WeaponService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should name be required : name is not empty : valid is true', () => {
    component.wookieForm.patchValue({
      name: 'hello'
    });

    expect(component.wookieForm.get('name').valid).toBeTruthy();
  });

  it('should name be required : name is empty : valid is false', () => {
    component.wookieForm.patchValue({
      name: ''
    });

    expect(component.wookieForm.get('name').valid).toBeFalsy();
  });

  it('should run timeout callback with delay after call tick with millis', fakeAsync(() => {
    let called = false;
    setTimeout(() => {
      called = true;
    }, 100);
    tick(100);
    expect(called).toBe(false);
  }));

  it('should be different names', fakeAsync(() => {
    component.wookieForm.patchValue({
      weapon: {
        name: 'hello'
      }
    });

    tick(700);

    expect(component.wookieForm.get('weapon').get('name').valid).toBeTruthy();
  }));
});
