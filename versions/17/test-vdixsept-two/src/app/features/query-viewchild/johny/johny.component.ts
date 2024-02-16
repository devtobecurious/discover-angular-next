import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-johny',
  standalone: true,
  imports: [],
  templateUrl: './johny.component.html',
  styleUrl: './johny.component.css'
})
export class JohnyComponent {
  title = signal<string>('');
}
