import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TabsPage} from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tasks',
        loadChildren: () =>
          import('../task-list/task-list.module').then(
            m => m.TaskListPageModule,
          ),
      },
      {
        path: 'labels',
        loadChildren: () =>
          import('../label-list/label-list.module').then(
            m => m.LabelListPageModule,
          ),
      },
      {
        path: '',
        redirectTo: '/app/tabs/tasks',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsRoutingModule {}
