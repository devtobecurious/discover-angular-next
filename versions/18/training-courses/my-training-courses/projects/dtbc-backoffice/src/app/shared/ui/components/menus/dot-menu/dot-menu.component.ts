import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'dtbc-dot-menu',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule, MatIconModule],
  templateUrl: './dot-menu.component.html',
  styleUrl: './dot-menu.component.css'
})
export class DotMenuComponent {
  private readonly router = inject(Router);

  goToTrainingCourses(): void {
    this.router.navigate(['training-courses']);
  }

  goToLogin(): void {
    this.router.navigate(['authentication/login']);
  }
}
