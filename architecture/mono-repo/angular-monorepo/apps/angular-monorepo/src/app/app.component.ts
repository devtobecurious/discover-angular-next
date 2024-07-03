import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import {PlayersComponent} from '@angular-monorepo/players';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, PlayersComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-monorepo';
}
