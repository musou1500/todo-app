import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";
import { TaskEffects } from "./effects";
import { NgModule } from "@angular/core";
import { reducer } from "./reducer";
import { EffectsModule } from "@ngrx/effects";

@NgModule({
  imports: [
    HttpClientModule,
    StoreModule.forFeature("task", reducer),
    EffectsModule.forFeature([TaskEffects])
  ]
})
export class TaskStoreModule {}
