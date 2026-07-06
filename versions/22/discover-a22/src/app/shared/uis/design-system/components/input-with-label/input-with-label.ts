import { Component, input, InputSignal, InputSignalWithTransform, model, ModelSignal, OutputRef } from '@angular/core';
import { DisabledReason, FormValueControl, ValidationError, WithOptionalFieldTree } from '@angular/forms/signals';

@Component({
  selector: 'app-input-with-label',
  imports: [],
  templateUrl: './input-with-label.html',
  styleUrl: './input-with-label.css',
})
export class InputWithLabel implements FormValueControl<string> {
  label = input.required();
  for = input('');
  placeHolder = input('');
  value = model('')


  errors?: InputSignal<readonly ValidationError.WithOptionalFieldTree[]> | InputSignalWithTransform<readonly ValidationError.WithOptionalFieldTree[], unknown> | undefined;
  invalid?: InputSignal<boolean> | InputSignalWithTransform<boolean, unknown> | undefined;
   touched?: InputSignal<boolean> | InputSignalWithTransform<boolean, unknown> | undefined;
}
