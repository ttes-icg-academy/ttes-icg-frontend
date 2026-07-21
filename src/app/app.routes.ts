import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./reservation/acceuil/acceuil.component').then(m => m.AccueilComponent),
  },
  {
    path: 'demande',
    loadComponent: () => import('./reservation/formulaire-demande/formulaire-demande.component').then(m => m.FormulaireDemandeComponent),
  },
  {
    path: 'confirmation/:id',
    loadComponent: () => import('./reservation/confirmation/confirmation.component').then(m => m.ConfirmationComponent),
  },
  {
    path: 'admin/login',
    loadComponent: () => import('./admin/login/login.component').then(m => m.LoginComponent),
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.routes').then(m => m.ADMIN_ROUTES),
  },
];

