import { Routes } from "@angular/router";

// Eager loading
// export const mainRoutes: Routes = [
//   { path: 'child-one', component: ChildOneComponent }
// ]

// Lazy loading list of routes
export const mainRoutes: Routes = [
  { path: 'child-one', loadChildren: () => import('./lazy/index').then(item => item.lazyRoutes) }
];

// Lazy loading one component
// export const mainRoutes: Routes = [
//   { path: 'child-one', loadComponent: () => import('../childs/child-one/child-one.component').then(item => item.ChildOneComponent) }
// ];


