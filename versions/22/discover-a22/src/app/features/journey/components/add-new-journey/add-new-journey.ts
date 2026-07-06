import { Component, signal } from '@angular/core';
import { emptyJourney, Journey, journeySchema } from '../../models';
import { form, FormField, FormRoot } from '@angular/forms/signals';
import { InputWithLabel } from '../../../../shared/uis/design-system/components/input-with-label/input-with-label';

@Component({
  selector: 'app-add-new-journey',
  imports: [FormField, FormRoot, InputWithLabel],
  templateUrl: './add-new-journey.html',
  styleUrl: './add-new-journey.css',
})
export class AddNewJourney {
  private readonly journey = signal<Journey>(emptyJourney);
  protected readonly journeyForm = form(this.journey, journeySchema, 
    { }
  );

  saveOne(): void {
    
  }
}
