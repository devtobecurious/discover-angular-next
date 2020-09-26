import { AbstractControl, AsyncValidatorFn, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Observable, timer } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { WeaponService } from '../services/weapon.service';

export default function validWeaponName(service: WeaponService): AsyncValidatorFn {
  return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    return timer(200).pipe(
      tap({ complete: () => console.log('validWeaponName :>> ') }),
      switchMap(time => service.validateName(control.value)),
      map(item => item ? null : { invalidName: true })
    );
  };
}
