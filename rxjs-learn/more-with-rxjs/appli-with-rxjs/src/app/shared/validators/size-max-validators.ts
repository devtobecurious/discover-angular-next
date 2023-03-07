import { AbstractControl, ValidatorFn } from '@angular/forms';

export function sizeMaxValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null  => {
    console.log('parseInt(control.value, 2) :>> ', parseInt(control.value, 2));

    return parseInt(control.value, 10) <= 100 ? null : { sizeMax: 100 };
  };
}
