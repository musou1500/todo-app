import {CanActivate, ActivatedRouteSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {Store, select} from '@ngrx/store';
import {State} from '../store';
import {map, first, tap} from 'rxjs/operators';
import {of} from 'rxjs';
import {selectLabel, selectLabels} from '../store/label';

@Injectable({providedIn: 'root'})
export class EnsureLabelGuard implements CanActivate {
  constructor(private store: Store<State>) {}
  canActivate(route: ActivatedRouteSnapshot) {
    if (!route.paramMap.has('id')) {
      this.store.dispatch(selectLabel({label: null}));
      return of(true);
    }

    const id = parseInt(route.paramMap.get('id'));
    return this.store.pipe(
      select(selectLabels),
      map(labels => labels.find(t => t.id === id)),
      tap(label => {
        if (label !== undefined) {
          this.store.dispatch(selectLabel({label}));
        }
      }),
      map(label => label !== undefined),
      first(),
    );
  }
}
