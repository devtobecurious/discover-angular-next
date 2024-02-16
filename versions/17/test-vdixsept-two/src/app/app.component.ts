import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputTestComponent } from './features/input-test/input-test.component';
import { QueryViewchildComponent } from './features/query-viewchild/query-viewchild.component';
import { ModelInputComponent } from './features/model-input/model-input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InputTestComponent, QueryViewchildComponent, ModelInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test-vdixsept-two';
}
