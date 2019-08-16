import {createAction, props, union} from '@ngrx/store';
import {Label} from '../../models';

export const loadLabels = createAction('[Label] Load Labels');
export const loadLabelsFailure = createAction('[Label] Load Labels Failure');
export const loadLabelsSuccess = createAction(
  '[Label] Load Labels Success',
  props<{labels: Label[]}>(),
);

export const saveLabel = createAction(
  '[Label] Save Label',
  props<{label: Partial<Label>, id?: number}>(),
);
export const saveLabelFailure = createAction('[Label] Save Label Failure');
export const saveLabelSuccess = createAction(
  '[Label] Save Label Success',
  props<{label: Label}>(),
);
export const selectLabel = createAction(
  '[Label] Select Label',
  props<{label: Label | null}>(),
);
export const deleteLabel = createAction(
  '[Label] Delete Label Failure',
  props<{id: number}>(),
);
export const deleteLabelFailure = createAction('[Label] Delete Label Failure');
export const deleteLabelSuccess = createAction('[Label] Delete Label Success');

const actions = union({
  loadLabels,
  loadLabelsFailure,
  loadLabelsSuccess,
  saveLabel,
  saveLabelFailure,
  saveLabelSuccess,
  deleteLabel,
  deleteLabelSuccess,
  deleteLabelFailure,
  selectLabel,
});

export type LabelActionsUnion = typeof actions;
