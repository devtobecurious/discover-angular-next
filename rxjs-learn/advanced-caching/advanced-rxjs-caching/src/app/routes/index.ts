import { Routes } from "@angular/router";
import { DashboardComponent } from "../pages/dashboard/dashboard.component";

export const mainRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'jokes',
    loadChildren: () => import('../features/jokes/routes/index').then(item => item.jokeRoutes)
  }
];
