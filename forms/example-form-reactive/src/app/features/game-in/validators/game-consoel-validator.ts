import { AbstractControl, ValidatorFn } from "@angular/forms";

export function sizeMaxValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    return parseInt(control.value, 10) <= 100 ? null : { sizeMax: 100 };
  };
}
