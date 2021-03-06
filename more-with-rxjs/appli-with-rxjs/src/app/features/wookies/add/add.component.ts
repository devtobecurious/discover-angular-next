import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { debounceTime, distinctUntilChanged, pairwise, switchMap } from 'rxjs/operators';
import { WeaponService } from 'src/app/shared/services/weapon.service';
import modulo from 'src/app/shared/validators/modulo.validator';
import { sizeMaxValidator } from 'src/app/shared/validators/size-max-validators';
import validWeaponName from 'src/app/shared/validators/weapon-name.validator';
import { nameDifferentValidator } from './../../../shared/validators/name-different-validator';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  name = new FormControl(8);

  wookieForm = new FormGroup({
    name: new FormControl('', [], modulo(1)),
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

    this.wookieForm.valueChanges.pipe(
      distinctUntilChanged(),
      pairwise()
    ).subscribe(item => console.log('wookieForm:before/new', item));
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
