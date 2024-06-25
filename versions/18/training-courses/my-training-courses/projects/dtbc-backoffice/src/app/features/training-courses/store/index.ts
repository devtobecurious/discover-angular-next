import { inject } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { tapResponse } from '@ngrx/operators';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { concatMap, filter, pipe, tap } from 'rxjs';
import { AuthenticateStore } from '../../authentication/store';
import { TrainingCourses } from '../models';
import { TrainingCoursesInfrastructure } from '../services/training-courses.infrastructure';

export interface TrainingCourseState {
  items: TrainingCourses;
  isLoading: boolean;
}

const initialState: TrainingCourseState = {
  isLoading: false,
  items: [],
};

export const TrainingCoursesStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods(
    (
      store,
      authStore = inject(AuthenticateStore),
      isAuthenticated$ = toObservable(authStore.isAuthenticated),
      infra = inject(TrainingCoursesInfrastructure)
    ) => ({
      loadAll: rxMethod(
        pipe(
          tap(() => patchState(store, { isLoading: true })),
          concatMap(() => isAuthenticated$),
          filter(auth => auth),
          tap(() => console.info('is auth !')),
          concatMap(() => {
            return infra.getAll().pipe(
              tapResponse({
                next: items => patchState(store, { items, isLoading: false }),
                error: () => patchState(store, { isLoading: false }),
              })
            );
          })
        )
      ),
    })
  )
);
