import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private readonly router = inject(Router);
  userName = '';
  userEmail = '';
  confirmationMessage = signal('');

  title = 'test-with-cypress';
  isDisplayed = signal(false);

  display(): void {
    this.isDisplayed.set(true);
  }

  submitForm(): void {
    this.confirmationMessage.set('Thank you');
    this.router.navigate(['/people']);
  }
}
