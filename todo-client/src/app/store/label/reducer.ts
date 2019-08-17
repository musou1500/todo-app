import {
  LabelActionsUnion,
  loadLabels,
  loadLabelsSuccess,
  loadLabelsFailure,
  selectLabel
} from "./actions";
import { Label } from "../../models";
import { createFeatureSelector, createReducer, on } from "@ngrx/store";
import {
  LoadableListState,
  createLoadableListAdapter
} from "../../lib/ngrx-loadable";

export type LabelState = LoadableListState<Label>;

const adapter = createLoadableListAdapter<Label>();

export const selectLabelState = createFeatureSelector<LabelState>("label");

export const {
  selectLoaded,
  selectLoading,
  selectData: selectLabels,
  selectSelected: selectSelectedLabel
} = adapter.getSelectors(selectLabelState);

const labelReducer = createReducer(
  adapter.createInitialState(),
  on(loadLabels, state => adapter.load(state)),
  on(loadLabelsSuccess, (state, { labels }) => adapter.success(labels, state)),
  on(loadLabelsFailure, state => adapter.fail(state)),
  on(selectLabel, (state, { label }) => adapter.select(label, state))
);

export function reducer(state: LabelState, action: LabelActionsUnion) {
  return labelReducer(state, action);
}
