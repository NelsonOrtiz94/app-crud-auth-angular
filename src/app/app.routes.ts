import { Routes } from '@angular/router';
import { privateGuard, publicGuard } from './core/auth.guard';

export const routes: Routes = [
  {
    canActivateChild: [publicGuard()],
    path: 'auth',
    loadChildren: () => import('./auth/features/auth.routes'),
  },
  {
    canActivateChild: [privateGuard()],
    path: 'tasks',
    loadChildren: () => import('./task/features/task.route'),
  },
  {
    path: '**',
    redirectTo: '/tasks'
  },
];
