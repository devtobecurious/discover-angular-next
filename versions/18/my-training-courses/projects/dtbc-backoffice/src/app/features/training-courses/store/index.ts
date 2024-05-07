import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { TrainingCourses } from '../models';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { concatMap, filter, pipe, tap } from 'rxjs';
import { toObservable } from '@angular/core/rxjs-interop';
import { inject } from '@angular/core';
import { AuthenticateStore } from '../../authentication/store';

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
      isAuthenticated$ = toObservable(authStore.isAuthenticated)
    ) => ({
      loadAll: rxMethod(
        pipe(
          tap(() => patchState(store, { isLoading: true })),
          concatMap(() => isAuthenticated$),
          filter(auth => auth),
          tap(() => console.info('is auth !'))
        )
      ),
    })
  )
);
