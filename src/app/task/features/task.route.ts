import { Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';

export const taskRoutes: Routes = [
  { path: '', component: TaskListComponent }, 
];

export default taskRoutes;
