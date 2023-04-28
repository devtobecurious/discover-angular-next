import { Routes } from "@angular/router";
import { HomeComponent } from "../features/main/home/home.component";

export const mainRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'planets',
    loadChildren: () => import('../features/planets/routes/index').then(item => item.planetsRoutes)
  }
]
