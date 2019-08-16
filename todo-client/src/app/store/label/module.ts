import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {LabelEffects} from './effects';
import {NgModule} from '@angular/core';
import {reducer} from './reducer';
import {EffectsModule} from '@ngrx/effects';

@NgModule({
  imports: [
    HttpClientModule,
    StoreModule.forFeature('label', reducer),
    EffectsModule.forFeature([LabelEffects]),
  ],
})
export class LabelStoreModule {}
