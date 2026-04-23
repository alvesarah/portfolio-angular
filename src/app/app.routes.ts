import { Routes } from '@angular/router';
import { Home } from './features/inicio/pages/home/home';
import { Sobre } from './features/inicio/pages/sobre/sobre';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'sobre',
    component: Sobre,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
