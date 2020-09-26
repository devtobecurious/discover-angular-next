import { nameDifferentValidator } from './../../../shared/validators/name-different-validator';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { sizeMaxValidator } from 'src/app/shared/validators/size-max-validators';
import validWeaponName from 'src/app/shared/validators/weapon-name.validator';
import { WeaponService } from 'src/app/shared/services/weapon.service';
import { of, timer } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  name = new FormControl(8);

  wookieForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    size: new FormControl('', sizeMaxValidator()),
    weapon: new FormGroup({
      name: new FormControl('', [Validators.required], validWeaponName(this.weaponService)),
      xp: new FormControl('')
    })},
    {
      validators: nameDifferentValidator
    }
  );

  enemyForm = this.fb.group({
    name: [''],
    weapon: this.fb.group({
      name: [''],
      xp: ['']
    }),
    legs: this.fb.array([
      //this.fb.control('')
    ])
  });

  constructor(private fb: FormBuilder, private weaponService: WeaponService) { }

  ngOnInit(): void {
    this.enemyForm.valueChanges.pipe(
      debounceTime(200),
      switchMap((value: string) => {console.log('valueChanges ?', value); return of(value); })
    ).subscribe(item => console.log('lets subscribe :>> ', item));
  }

  setValue() {
    this.name.setValue(6);
  }

  onSubmit() {
    console.log('form :>> ', this.wookieForm.value);
  }

  addLeg() {
    this.legs.push(this.fb.control(''));
  }

  get legs(): FormArray {
    return this.enemyForm.get('legs') as FormArray;
  }

  prepareWookiePatch() {
    this.wookieForm.patchValue({
      name: 'chewie',
      weapon: {
        xp: 18
      }
    });
  }

  prepareWookieAll() {
    this.wookieForm.setValue({
      name: 'chewie',
      size: 200,
      weapon: {
        name: 'bowcaster',
        xp: 1500
      }
    });
  }

  prepareEnemyAll() {
    this.enemyForm.setValue({
      name: 'chewie',
      weapon: {
        name: 'blaster',
        xp: 150
      }
    });
  }
}
