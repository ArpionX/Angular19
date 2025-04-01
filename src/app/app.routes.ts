import { Routes } from '@angular/router';
import { FuturoComponent } from './futuro/futuro.component';
export const routes: Routes = [
  {
    path: '',
    title: '',
    component: FuturoComponent,
    children: [

    ]
  },
  {
    path: '',
    redirectTo: 'futuro',
    pathMatch: 'full',
  },
  {
    path:'**',
    component: FuturoComponent,
  }
];
