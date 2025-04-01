import { Routes } from '@angular/router';
import { FuturoComponent } from './futuro/futuro.component';
export const routes: Routes = [
  {
    path: '',
    title: 'home page',
    component: FuturoComponent,
    children: [

    ]
  },
  {
    path:'**',
    component: FuturoComponent,
  }
];
