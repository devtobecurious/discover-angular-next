import { Component, input } from '@angular/core';
import { TrainingCourse, TrainingCourses } from '../../models';

@Component({
  selector: 'dtbc-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  data = input.required<TrainingCourses>();
}
