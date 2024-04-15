import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },

  {
    path: '',
    loadChildren: () => import('./patient/patient.routes').then((m) => m.routes),
  },
  {
    path: 'login',
    loadComponent: () => import('../app/authentification/login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'sign-up',
    loadComponent: () => import('../app/authentification/sign-up/sign-up.page').then((m) => m.SignUpPage),
  },  {
    path: 'ion-menu',
    loadComponent: () => import('./shared/ion-menu/ion-menu.page').then( m => m.IonMenuPage)
  },

 

];
