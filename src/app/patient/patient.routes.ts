import { Routes } from '@angular/router';
import { PatientPage } from './patient.page';




export const routes: Routes = [
    {
      path: 'patient',
      component: PatientPage,
      children: [
        {
          path: 'patient-home',
          loadComponent: () => import('../patient/patient-home-tab/patient-home-tab.page').then((m) => m.PatientHomeTabPage),
        },
        {
          path: 'consultations',
          loadComponent: () => import('../patient/consultation-tab/consultation-tab.page').then((m) => m.ConsultationTabPage),
        },
        {
            path: 'patient-profile',
            loadComponent: () => import('../patient/patient-profile-tab/patient-profile-tab.page').then((m) => m.PatientProfileTabPage),
        },
        {
            path: 'medicine',
            loadComponent: () => import('../patient/medicine-tab/medicine-tab.page').then((m) => m.MedicineTabPage),
        },
        {
          path: 'feedback',
          loadComponent: () => import('./feedback/feedback.page').then( m => m.FeedbackPage)
        },
        {
          path: 'settings',
          loadComponent: () => import('./settings/settings.page').then( m => m.SettingsPage)
        },
        {
          path: 'help-and-support',
          loadComponent: () => import('./help-and-support/help-and-support.page').then( m => m.HelpAndSupportPage)
        },
        
      ],
    },
    
    {
      path: '',
      redirectTo: '/patient/patient-home',
      pathMatch: 'full',
    }
 

 

 
  ];