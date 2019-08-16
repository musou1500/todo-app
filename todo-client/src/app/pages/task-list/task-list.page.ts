import {Component, OnInit} from '@angular/core';
import {Store, select} from '@ngrx/store';
import {State} from '../../store';
import {
  selectLoading,
  selectTasks,
  loadTasks,
  selectLoaded,
} from '../../store/task';
import {first, filter} from 'rxjs/operators';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.page.html',
  styleUrls: ['./task-list.page.scss'],
})
export class TaskListPage implements OnInit {
  loading$ = this.store.pipe(select(selectLoading));
  tasks$ = this.store.pipe(select(selectTasks));
  loaded$ = this.store.pipe(select(selectLoaded));

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.store.dispatch(loadTasks());
  }

  refresh(event: any) {
    this.store.dispatch(loadTasks());
    this.loading$
      .pipe(
        filter(loading => !loading),
        first(),
      )
      .subscribe(() => event.target.complete());
  }
}
