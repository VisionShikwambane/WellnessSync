import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./patient/patient.routes').then((m) => m.routes),
  },
 

];
