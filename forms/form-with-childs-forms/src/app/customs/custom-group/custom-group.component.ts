import { Component, forwardRef, inject, input } from '@angular/core';
import { CustomSelectComponent } from '../custom-select/custom-select.component';
import { AbstractControl, ControlValueAccessor, FormBuilder, NG_VALIDATORS, NG_VALUE_ACCESSOR, ReactiveFormsModule, ValidationErrors, Validator } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-custom-group',
  standalone: true,
  imports: [ReactiveFormsModule, CustomSelectComponent],
  templateUrl: './custom-group.component.html',
  styleUrl: './custom-group.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => CustomGroupComponent),
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CustomGroupComponent),
      multi: true
    }
  ]
})
export class CustomGroupComponent implements ControlValueAccessor, Validator {
  onChangeSubs: Subscription[] = [];
  onTouched: Function = () => {};
  data1 = input.required<{id: number, label: string}[]>()
  data2 = input.required<{id: number, label: string}[]>()

  customGroup = inject(FormBuilder).group({
    directorId: '2',
    typeId: '1'
  })

  writeValue(obj: any): void {
    if(obj) {
      this.customGroup.setValue(obj, {emitEvent: false})
    }
  }
  registerOnChange(fn: any): void {
    console.info('group', fn)
    const sub = this.customGroup.valueChanges.subscribe(fn);
    this.onChangeSubs.push(sub);
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled) {
      this.customGroup.disable();
    }
    else {
      this.customGroup.enable();
    }
  }

  validate(control: AbstractControl): ValidationErrors | null {
    if(this.customGroup.valid) {
      return null;
    }

    console.info('validate group', this.customGroup.controls['directorId'].errors)

    let errors: ValidationErrors = {}

    Object.keys(this.customGroup.controls).forEach(item => {
      const group = this.customGroup.get(item)

      if(group?.errors) {
        errors = {
          ...errors,
        }
        errors[item] = group.errors
      }
    })

    return errors
  }

  registerOnValidatorChange?(fn: () => void): void {
  }


}
