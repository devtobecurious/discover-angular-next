import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DotMenuComponent } from './shared/ui/components/menus/dot-menu/dot-menu.component';
import { AuthenticateStore } from './features/authentication/store';
import { AuthenticateApplication } from './features/authentication/services/authenticate.application';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DotMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private readonly authApplication = inject(AuthenticateApplication);
}
