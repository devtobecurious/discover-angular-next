import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MigrationTestingComponent } from './migration-testing/migration-testing.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    MigrationTestingComponent
  ]
})
export class AppComponent {
  title = 'signal-api-finalized';

  setNewContent(content: string): void {
    alert(content)
  }
}
