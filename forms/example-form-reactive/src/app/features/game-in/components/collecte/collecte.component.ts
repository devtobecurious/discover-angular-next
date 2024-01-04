import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroupDirective, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import { ErrorStateMatcher, MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { AsyncPipe } from '@angular/common';
import { CollectGameBusiness } from '../../services/collecte-game.business';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-collecte',
  standalone: true,
  imports: [AsyncPipe, ReactiveFormsModule, MatInputModule, MatSelectModule, MatExpansionModule, MatFormFieldModule, MatNativeDateModule, MatDatepickerModule, MatIconModule],
  templateUrl: './collecte.component.html',
  styleUrl: './collecte.component.css'
})
export class CollecteAvisComponent {
  games$ = inject(CollectGameBusiness).getGameAll();
  private builder = inject(FormBuilder);
  matcher = new MyErrorStateMatcher();
  collectForm = this.builder.group({
    user: this.builder.group({
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    }),
    game: this.builder.group({
      id: ['']
    })
  })

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  save(): void {

  }

  get userGroupIsValid(): boolean {
    return this.collectForm.controls.user.valid;
  }
}
