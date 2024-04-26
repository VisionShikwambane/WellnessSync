import { Routes } from '@angular/router';
import { DoctorPage } from './doctor.page';




export const routes: Routes = [
    {
      path: 'doctor',
      component: DoctorPage,
      children: [
        {
            path: 'doctor-home',
            loadComponent: () => import('./doctor-home/doctor-home.page').then( m => m.DoctorHomePage)
        },
        {
            path: 'slots',
            loadComponent: () => import('./slot-page/slot-page.page').then( m => m.SlotPagePage)
        },
        {
            path: 'doctor-profile',
            loadComponent: () => import('./doctor-profile/doctor-profile.page').then( m => m.DoctorProfilePage)
        },
  
    ],
    },
    
    {
      path: '',
      redirectTo: '/doctor/doctor-home',
      pathMatch: 'full',
    },
  
  
  
 

 

 
  ];