import { Component, OnInit } from "@angular/core";
import { State } from "../../store";
import { Store, select } from "@ngrx/store";
import {
  selectLoading,
  selectLabels,
  loadLabels,
  selectLoaded
} from "../../store/label";
import { first, filter } from "rxjs/operators";

@Component({
  selector: "app-label-list",
  templateUrl: "./label-list.page.html",
  styleUrls: ["./label-list.page.scss"]
})
export class LabelListPage implements OnInit {
  loading$ = this.store.pipe(select(selectLoading));
  loaded$ = this.store.pipe(select(selectLoaded));
  labels$ = this.store.pipe(select(selectLabels));

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.store.dispatch(loadLabels());
  }

  refresh(event: any) {
    this.store.dispatch(loadLabels());
    this.loading$
      .pipe(
        filter(loading => !loading),
        first()
      )
      .subscribe(() => event.target.complete());
  }
}
