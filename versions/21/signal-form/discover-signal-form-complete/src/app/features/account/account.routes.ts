import { Routes } from "@angular/router";
import { CreateAccountComponent } from "./components/create-account/create-account";

export const accountRoutes: Routes = [
  {
    path: 'create',
    component: CreateAccountComponent
  }
]
