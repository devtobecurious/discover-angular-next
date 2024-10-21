import { Component, forwardRef, input, model, signal } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormsModule, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './custom-input.component.html',
  styleUrl: './custom-input.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true
    }
  ]
})
export class CustomInputComponent implements ControlValueAccessor, Validator {
  value = '';
  data = input.required<{id: number, label: string}[]>()

  private onChange: undefined | ((value: string) => void)
  private onTouched: undefined | (() => void)

  validate(control: AbstractControl): ValidationErrors | null {
    let result: ValidationErrors | null = null

    if(! control.value) {
      result =  { required: true }

      console.info(result)
    }

    return result
  }

  registerOnValidatorChange?(fn: () => void): void {
  }

  change(e: Event): void {
    const target = (e.target as HTMLSelectElement)
    this.value = target.value

    if(this.onChange) {
      this.onChange(target.value)
    }
    if(this.onTouched) {
      this.onTouched()
    }
    console.info('change', this.value)
  }

  writeValue(obj: any): void {
    console.info('writeValue 1', this.value)
    this.value = obj
    console.info('writeValue 2', this.value)
  }

  registerOnChange(fn: any): void {
    this.change = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }

  setDisabledState?(isDisabled: boolean): void {

  }

}
