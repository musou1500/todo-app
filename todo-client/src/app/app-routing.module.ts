import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {EnsureTaskGuard} from './guards/ensure-task.guard';
import {EnsureLabelGuard} from './guards/ensure-label.guard';

const routes: Routes = [
  {path: '', redirectTo: 'app/tabs', pathMatch: 'full'},
  {
    path: 'tasks/create',
    loadChildren: () =>
      import('./pages/edit-task/edit-task.module').then(
        m => m.EditTaskPageModule,
      ),
    canActivate: [EnsureTaskGuard],
  },
  {
    path: 'tasks/:id',
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
    path: 'labels/create',
    loadChildren: () =>
      import('./pages/edit-label/edit-label.module').then(
        m => m.EditLabelPageModule,
      ),
    canActivate: [EnsureLabelGuard],
  },
  {
    path: 'labels/:id',
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
