import { Step } from './core/models/step';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appli-with-rxjs';
  currentStep: Step = null;
  steps: Step[] = [{ id: 1, label: 'rxjs' }, { id: 2, label: 'reactive form' }];

  selectStep(id: number) {
    this.currentStep = this.steps.find(item => item.id == id);
  }
}
