import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { sizeMaxValidator } from 'src/app/shared/validators/size-max-validators';

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
      name: new FormControl(''),
      xp: new FormControl('')
    })
  });

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

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
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
