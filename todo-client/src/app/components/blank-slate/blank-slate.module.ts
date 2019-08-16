import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {BlankSlateComponent} from './blank-slate.component';

@NgModule({
  imports: [IonicModule, CommonModule],
  declarations: [BlankSlateComponent],
  exports: [BlankSlateComponent],
})
export class BlankSlateModule {}
