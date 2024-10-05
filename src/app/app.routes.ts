import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/features/auth.routes'),
  },
  {
    path: 'tasks',
    loadChildren: () => import('./task/features/task.route'),
  },
  {
    path: '**',
    redirectTo: '/tasks'
  },
];
