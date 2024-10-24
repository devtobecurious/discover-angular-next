import { Component, forwardRef, input, model, signal } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormsModule, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';

@Component({
  selector: 'app-custom-select',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './custom-select.component.html',
  styleUrl: './custom-select.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomSelectComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CustomSelectComponent),
      multi: true
    }
  ]
})
export class CustomSelectComponent implements ControlValueAccessor, Validator {
  label = input.required<string>()
  private _value = '';
  get value() {
    return this._value
  }
  set value(item: string) {
    this._value = item

    if(this.onChange) {
      this.onChange(this._value)
    }
    if(this.onTouched) {
      this.onTouched()
    }
  }

  data = input.required<{id: number, label: string}[]>()

  private onChange: undefined | ((value: string) => void)
  private onTouched: undefined | (() => void)

  validate(control: AbstractControl): ValidationErrors | null {
    let result: ValidationErrors | null = null

    if(! this.value) {
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
  }

  writeValue(obj: any): void {
    this.value = obj
  }

  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }

  setDisabledState?(isDisabled: boolean): void {

  }

}
