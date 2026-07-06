import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'journey',
        loadChildren: () => import('./features/journey/journey.routes').then(m => m.journeyRoutes)
    }
];
