import { inject, Injectable, Signal } from "@angular/core";
import { TrainingCoursesStore } from "../store";
import { TrainingCourses } from "../models";

@Injectable({ providedIn: 'root' })
export class TrainingCoursesApplication {
  private readonly store = inject(TrainingCoursesStore);

  init(): void {
    this.store.loadAll({});
  }

  get items(): Signal<TrainingCourses> {
    return this.store.items;
  }

  get isLoading(): Signal<boolean> {
    return this.store.isLoading;
  }
}
