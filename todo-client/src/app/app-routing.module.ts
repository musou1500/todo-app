import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {EnsureTaskGuard} from './guards/ensure-task.guard';
import { EnsureLabelGuard } from './guards/ensure-label.guard';

const routes: Routes = [
  {path: '', redirectTo: 'app/tabs', pathMatch: 'full'},
  {
    path: 'task-list',
    loadChildren: () =>
      import('./pages/task-list/task-list.module').then(
        m => m.TaskListPageModule,
      ),
  },
  {
    path: 'edit-task/:id',
    loadChildren: () =>
      import('./pages/edit-task/edit-task.module').then(
        m => m.EditTaskPageModule,
      ),
    canActivate: [EnsureTaskGuard],
  },
  {
    path: 'edit-task',
    loadChildren: () =>
      import('./pages/edit-task/edit-task.module').then(
        m => m.EditTaskPageModule,
      ),
    canActivate: [EnsureTaskGuard],
  },
  {
    path: 'app',
    loadChildren: () =>
      import('./pages/tabs/tabs.module').then(m => m.TabsPageModule),
  },
  {
    path: 'label-list',
    loadChildren: () =>
      import('./pages/label-list/label-list.module').then(
        m => m.LabelListPageModule,
      ),
  },
  {
    path: 'edit-label',
    loadChildren: () =>
      import('./pages/edit-label/edit-label.module').then(
        m => m.EditLabelPageModule,
      ),
    canActivate: [EnsureLabelGuard],
  },
  {
    path: 'edit-label/:id',
    loadChildren: () =>
      import('./pages/edit-label/edit-label.module').then(
        m => m.EditLabelPageModule,
      ),
    canActivate: [EnsureLabelGuard],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules}),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
