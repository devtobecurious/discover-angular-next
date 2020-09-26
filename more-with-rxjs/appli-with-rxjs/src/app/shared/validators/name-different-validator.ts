import { FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

export const nameDifferentValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const name = control.get('name');
  const weapon = control.get('weapon') as FormGroup;
  const weaponName = weapon.get('name');

  return name && weaponName && (name.value !== weaponName.value) ? null : {identic: true};
};
