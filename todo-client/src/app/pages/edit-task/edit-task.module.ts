import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {EditTaskPage} from './edit-task.page';
import {ShowErrorModule} from 'src/app/components/show-error';

const routes: Routes = [
  {
    path: '',
    component: EditTaskPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ShowErrorModule,
  ],
  declarations: [EditTaskPage],
})
export class EditTaskPageModule {}
