import {Injectable} from '@angular/core';
import {createEffect, Actions, ofType} from '@ngrx/effects';
import {
  loadLabels,
  loadLabelsFailure,
  loadLabelsSuccess,
  saveLabel,
  saveLabelSuccess,
  saveLabelFailure,
  deleteLabel,
  deleteLabelSuccess,
  deleteLabelFailure,
} from './actions';
import {catchError, switchMap, map, mergeMap, mergeMapTo} from 'rxjs/operators';
import {of} from 'rxjs';
import {LabelResource} from 'src/app/api';

@Injectable()
export class LabelEffects {
  loadLabels$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadLabels),
      switchMap(() =>
        this.labelResource.getAll().pipe(
          map(labels => loadLabelsSuccess({labels})),
          catchError(() => of(loadLabelsFailure())),
        ),
      ),
    ),
  );

  deleteLabel$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteLabel),
      switchMap(({id}) =>
        this.labelResource.delete(id).pipe(
          mergeMapTo([deleteLabelSuccess(), loadLabels()]),
          catchError(() => of(deleteLabelFailure())),
        ),
      ),
    ),
  );

  saveLabel$ = createEffect(() =>
    this.actions$.pipe(
      ofType(saveLabel),
      switchMap(({label, id}) => {
        const saved$ = id != undefined
          ? this.labelResource.update(id, label)
          : this.labelResource.store(label);
        return saved$.pipe(
          mergeMap(label => [saveLabelSuccess({label}), loadLabels()]),
          catchError(() => of(saveLabelFailure())),
        );
      }),
    ),
  );

  constructor(
    private labelResource: LabelResource,
    private actions$: Actions,
  ) {}
}
