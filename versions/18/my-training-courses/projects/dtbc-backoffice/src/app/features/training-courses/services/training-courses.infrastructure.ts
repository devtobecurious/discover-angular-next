import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { TrainingCourse, TrainingCourses } from '../models';

@Injectable({ providedIn: 'root' })
export class TrainingCoursesInfrastructure {
  getAll(): Observable<TrainingCourse[]> {
    const result: TrainingCourses = [
      { id: 1, title: 'Angular signal', description: 'learn signals' },
      { id: 1, title: 'Angular rxjs', description: 'learn rxjs' },
    ];

    return of(result).pipe(delay(1000));
  }
}
