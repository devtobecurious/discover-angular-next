import { Component, inject } from '@angular/core';
import { ListComponent } from '../../components/list/list.component';
import { TrainingCoursesApplication } from '../../services/training-courses.application';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'dtbc-list-page',
  standalone: true,
  imports: [ListComponent, MatProgressSpinnerModule],
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.css',
})
export class ListPageComponent {
  private readonly application = inject(TrainingCoursesApplication);
  items$$ = this.application.items;
  loading$$ = this.application.isLoading;

  constructor() {
    this.application.init();
  }
}
