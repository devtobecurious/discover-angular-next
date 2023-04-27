import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child-with-title',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child-with-title.component.html',
  styleUrls: ['./child-with-title.component.css']
})
export class ChildWithTitleComponent {
  @Input({ required: true }) title = '';
}
