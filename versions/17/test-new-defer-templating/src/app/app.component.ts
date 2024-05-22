import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ChildOneComponent } from './child-one/child-one.component';
import { ChildOneBisComponent } from './child-one-bis/child-one-bis.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ChildOneComponent, ChildOneBisComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test-new-defer-templating';
}
