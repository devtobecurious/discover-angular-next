import { AsyncValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable, of, timer } from 'rxjs';
import { map, tap } from 'rxjs/operators';

export default function modulo(valeur: number): AsyncValidatorFn {
  return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {

    const isOk = parseInt(control.value, 0) % 2;

    return timer(500).pipe(
        tap(item => console.log('modulo', item)),
        map(item => isOk ? null : { error: true })
      );
    };
}
