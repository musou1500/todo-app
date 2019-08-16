import {CanActivate, ActivatedRouteSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {Store, select} from '@ngrx/store';
import {State} from '../store';
import {selectTasks, selectTask} from '../store/task';
import {map, first, tap} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable({providedIn: 'root'})
export class EnsureTaskGuard implements CanActivate {
  constructor(private store: Store<State>) {}
  canActivate(route: ActivatedRouteSnapshot) {
    if (!route.paramMap.has('id')) {
      this.store.dispatch(selectTask({task: null}));
      return of(true);
    }

    const id = parseInt(route.paramMap.get('id'));
    return this.store.pipe(
      select(selectTasks),
      map(tasks => tasks.find(t => t.id === id)),
      tap(task => {
        if (task !== undefined) {
          this.store.dispatch(selectTask({task}));
        }
      }),
      map(task => task !== undefined),
      first(),
    );
  }
}
