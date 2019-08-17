import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Store, select } from "@ngrx/store";
import { State } from "../../store";
import {
  saveLabel,
  selectSelectedLabel,
  deleteLabel
} from "src/app/store/label";
import { NavController } from "@ionic/angular";
import { filter, first } from "rxjs/operators";

@Component({
  selector: "app-edit-label",
  templateUrl: "./edit-label.page.html",
  styleUrls: ["./edit-label.page.scss"]
})
export class EditLabelPage implements OnInit {
  formGroup = this.formBuilder.group({
    name: ["", Validators.required]
  });

  selectedLabel$ = this.store.pipe(select(selectSelectedLabel));

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<State>,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.selectedLabel$
      .pipe(filter(label => !!label))
      .subscribe(label => this.formGroup.reset(label));
  }

  save() {
    this.selectedLabel$.subscribe(label =>
      this.store.dispatch(
        saveLabel({ id: label && label.id, label: this.formGroup.value })
      )
    );
    this.backToList();
  }

  delete() {
    this.selectedLabel$
      .pipe(first(label => !!label))
      .subscribe(label => this.store.dispatch(deleteLabel({ id: label.id })));
    this.backToList();
  }

  backToList() {
    this.navCtrl.navigateBack("/app/tabs/labels");
  }
}
