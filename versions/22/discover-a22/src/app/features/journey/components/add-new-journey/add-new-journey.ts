import { Component, injectAsync, onIdle, signal } from '@angular/core';
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
  private readonly service = injectAsync(() => import('../../services/add-one-journey').then(m => m.AddOneJourney),
    {
      prefetch: onIdle
    });
  private readonly journey = signal<Journey>(emptyJourney);
  protected readonly journeyForm = form(this.journey, journeySchema,
    {
      submission: {
        action: async (context) => {
          const service = await this.service();
          try {
            const saved = await service.save(context().value());
            return null;
          } catch (error: any) {

            if(error.message) {
              return { kind: 'main', message: error.message };
            }
            return { kind: 'main', message: "An error occurred while saving the journey" };            
          }         
        }
      }
    }
  );

  saveOne(): void {
    console.log('saveOne', this.journeyForm().value);
  }
}
