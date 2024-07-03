import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
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
  }
}
