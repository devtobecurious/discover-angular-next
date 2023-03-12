import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { JokeService } from 'src/app/features/jokes/services/jokes';

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent {
  jokeService = inject(JokeService);

  reload(): void {
    this.jokeService.force();
  }
}
