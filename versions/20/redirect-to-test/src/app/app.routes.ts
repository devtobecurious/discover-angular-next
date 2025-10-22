import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { UserAccessDefine } from './features/user/services/user-access-define';
import { map } from 'rxjs';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: () => {
        return inject(UserAccessDefine).getAccess()
               .pipe(map(role => role.value))
    }
  },
  {
    path: 'newbie',
    loadComponent: () => import('./features/junior/components/dashboard/dashboard').then(m => m.Dashboard)
  },
  {
    path: 'compta',
    loadComponent: () => import('./features/compta/components/dashboard/dashboard').then(m => m.Dashboard)
  },
];
