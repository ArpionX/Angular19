import { Routes } from '@angular/router';
import { FuturoComponent } from './futuro/futuro.component';
import { GaleryComponent } from './galery/galery.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
export const routes: Routes = [
  {
    path: '',
    title: 'Home',
    component: HomeComponent,
    children: [
      {
        path: 'user',
        title: 'User',
        component: UserComponent,
      }
    ]
  },
  {
    path: 'home/:id',
    redirectTo:'home/:id',
    pathMatch: 'full',
  },
  {
    path: 'futuro',
    title: 'Futuro',
    component: FuturoComponent,
  },
  {
    path: 'galery',
    title: 'Galery',
    component: GaleryComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path:'**',
    component: HomeComponent,
  }
];
