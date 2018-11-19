import { Routes } from '@angular/router';
import { HomeComponent } from '../views/home/home.component';

export const AppRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },  
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
