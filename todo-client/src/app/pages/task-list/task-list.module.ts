import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { TaskListPage } from "./task-list.page";
import { BlankSlateModule } from "../../components/blank-slate";
import { SpinnerModule } from "../../components/spinner";

const routes: Routes = [
  {
    path: "",
    component: TaskListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlankSlateModule,
    SpinnerModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TaskListPage]
})
export class TaskListPageModule {}
