import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesService, getJokeCategories } from '../../services/categories';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-categories',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent {
  items$ = inject(CategoriesService).getAll();
}
