import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EditLabelPage } from './edit-label.page';
import { ShowErrorModule } from 'src/app/components/show-error';

const routes: Routes = [
  {
    path: '',
    component: EditLabelPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    ShowErrorModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EditLabelPage]
})
export class EditLabelPageModule {}
