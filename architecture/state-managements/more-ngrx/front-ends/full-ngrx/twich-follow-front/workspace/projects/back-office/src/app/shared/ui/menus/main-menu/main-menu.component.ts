import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { select, Store } from '@ngrx/store';
import { selectUserIsLogged } from 'projects/back-office/src/app/features/authentication/store/selectors';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent {
  isLogged$ = inject(Store).select(selectUserIsLogged);
}
