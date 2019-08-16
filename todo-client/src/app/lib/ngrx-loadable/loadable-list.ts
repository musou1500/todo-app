import {
  LoadableState,
  LoadableAdapter,
  LoadableSelectors,
  createLoadableAdapter,
} from './loadable';
import {MemoizedSelector, Selector, createSelector} from '@ngrx/store';

export interface LoadableListState<T> extends LoadableState<T[]> {
  selected: T;
}

export interface LoadableListSelectors<T> extends LoadableSelectors<T[]> {
  selectSelected: MemoizedSelector<Object, T>;
}

export interface LoadableListAdapter<T> extends LoadableAdapter<T[]> {
  getSelectors: (
    selectState: Selector<Object, LoadableListState<T>>,
  ) => LoadableListSelectors<T>;
  createInitialState: (data?: T[]) => LoadableListState<T>;
  select: <S extends LoadableListState<T>>(data: T | null, state: S) => S;
}

export function createLoadableListAdapter<T>(): LoadableListAdapter<T> {
  const loadableAdapter = createLoadableAdapter<T[]>();
  return {
    getSelectors: selectState => ({
      ...loadableAdapter.getSelectors(selectState),
      selectSelected: createSelector(
        selectState,
        s => s.selected,
      ),
    }),
    select: (selected, state) => ({...state, selected}),
    fail: loadableAdapter.fail,
    load: loadableAdapter.load,
    success: loadableAdapter.success,
    createInitialState: (initialList: T[] = []) => ({
      ...loadableAdapter.createInitialState(initialList),
      selected: null,
    }),
  };
}
