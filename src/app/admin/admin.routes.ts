
import { Routes } from '@angular/router';

export const ADMIN_ROUTES: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent),
  },
  {
    path: 'reservations',
    loadComponent: () => import('./reservations-liste/reservations-liste.component').then(m => m.ReservationsListeComponent),
  },
  {
    path: 'reservations/:id',
    loadComponent: () => import('./reservation-detail/reservation-detail.component').then(m => m.ReservationDetailComponent),
  },
  {
    path: 'calendrier',
    loadComponent: () => import('./calendrier-salles/calendrier-salles.component').then(m => m.CalendrierSallesComponent),
  },
  {
    path: 'salles',
    loadComponent: () => import('./salles-gestion/salles-gestion.component').then(m => m.SallesGestionComponent),
  },
];
