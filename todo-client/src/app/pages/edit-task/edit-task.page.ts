import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {State} from '../../store';
import {Store, select} from '@ngrx/store';
import {saveTask, selectSelectedTask, deleteTask} from 'src/app/store/task';
import {NavController} from '@ionic/angular';
import {first, filter} from 'rxjs/operators';
import {selectLabels, loadLabels} from 'src/app/store/label';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.page.html',
  styleUrls: ['./edit-task.page.scss'],
})
export class EditTaskPage implements OnInit {
  formGroup = this.formBuilder.group({
    name: ['', Validators.required],
    description: [''],
    deadline: [null],
    labels: [],
  });
  selectedTask$ = this.store.pipe(select(selectSelectedTask));
  labels$ = this.store.pipe(select(selectLabels));

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<State>,
    private navCtrl: NavController,
  ) {}

  ngOnInit() {
    this.store.dispatch(loadLabels());
    this.selectedTask$.pipe(filter(task => task !== null)).subscribe(task => {
      const labelIds = task.labels.map(label => label.id);
      this.formGroup.reset({
        ...task,
        labels: labelIds
      });
    });
  }

  save() {
    this.selectedTask$.pipe(first()).subscribe(task => {
      this.store.dispatch(
        saveTask({id: task ? task.id : null, task: this.formGroup.value}),
      );
    });
    this.backToList();
  }

  toggleDone() {
    this.selectedTask$.pipe(first()).subscribe(task => {
      if (task) {
        this.store.dispatch(saveTask({id: task.id, task: {done: !task.done}}));
      }
    });
    this.backToList();
  }

  delete() {
    this.selectedTask$.pipe(first()).subscribe(task => {
      if (task) {
        this.store.dispatch(deleteTask({id: task.id}));
      }
    });
    this.backToList();
  }

  backToList() {
    this.navCtrl.navigateBack('/app/tabs/tasks');
  }
}
