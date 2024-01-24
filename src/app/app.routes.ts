import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
 
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./authentification/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'sign-up',
    loadComponent: () => import('./authentification/sign-up/sign-up.page').then( m => m.SignUpPage)
  },
  {
    path: 'forgot-password',
    loadComponent: () => import('./authentification/forgot-password/forgot-password.page').then( m => m.ForgotPasswordPage)
  },
  {
    path: 'admin',
    loadComponent: () => import('./admin/admin.page').then( m => m.AdminPage)
  },
  {
    path: 'patient',
    loadComponent: () => import('./patient/patient.page').then( m => m.PatientPage)
  },
  {
    path: 'doctor',
    loadComponent: () => import('./doctor/doctor.page').then( m => m.DoctorPage)
  },
];
