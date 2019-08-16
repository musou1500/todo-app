import {ShowErrorComponent} from './show-error.component';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

@NgModule({
  imports: [IonicModule, CommonModule],
  declarations: [ShowErrorComponent],
  exports: [ShowErrorComponent],
})
export class ShowErrorModule {}
