import { Component, inject } from '@angular/core';
import { ListComponent } from '../../components/list/list.component';
import { TrainingCoursesStore } from '../../store';

@Component({
  selector: 'dtbc-list-page',
  standalone: true,
  imports: [ListComponent],
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.css'
})
export class ListPageComponent {
  private readonly store = inject(TrainingCoursesStore);

  ngOnInit(): void {
    this.store.loadAll({});
  }
}
