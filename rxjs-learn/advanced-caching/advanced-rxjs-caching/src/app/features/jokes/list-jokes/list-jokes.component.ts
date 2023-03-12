import { CommonModule } from '@angular/common';
import { Component, OnDestroy, inject } from '@angular/core';
import { JokeService, OneCategoryService } from '../services/jokes';

@Component({
  selector: 'app-list-jokes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-jokes.component.html',
  styleUrls: ['./list-jokes.component.css'],
  providers: []
})
export class ListJokesComponent implements OnDestroy {
  private sub = inject(OneCategoryService).listen();
  jokes$ = inject(JokeService).getAll();

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
