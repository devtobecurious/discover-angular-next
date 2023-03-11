import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCategoriesComponent } from 'src/app/features/jokes/categories/list-categories/list-categories.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, ListCategoriesComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

}
