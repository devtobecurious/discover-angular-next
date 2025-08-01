import { Component, computed, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatCheckbox, MatCheckboxChange } from '@angular/material/checkbox';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatCheckbox, MatFormFieldModule, MatSelectModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private defaultItems: string[] = [];
  protected readonly title = signal('material-select-examples');
  protected readonly foods = signal([{ title: 'Pizza', value: 'pizza' }, { title: 'Burger', value: 'burger' }, { title: 'Pasta', value: 'pasta' }]);
  protected readonly foodForm = inject(FormBuilder).group({
    favoriteFoodsValues: [this.defaultItems]
  })

  onSubmit(): void {
    console.log(this.foodForm.value);
    // Implémentez ici la logique de soumission du formulaire
  }

  change(value: MatCheckboxChange): void {
    console.info('Form value changed:', value);

    if(value.checked) {
      this.foodForm.patchValue({
          favoriteFoodsValues: this.foods().map(food => food.value)
      });
    }
    else {
      this.foodForm.patchValue({
          favoriteFoodsValues: []
      });
    }

  }

}
