import {Selector, createSelector, MemoizedSelector} from '@ngrx/store';

export interface LoadableState<T> {
  loaded: boolean;
  loading: boolean;
  data: T;
}

export interface LoadableSelectors<T> {
  selectLoaded: MemoizedSelector<Object, boolean>;
  selectLoading: MemoizedSelector<Object, boolean>;
  selectData: MemoizedSelector<Object, T>;
}

export interface LoadableAdapter<T> {
  createInitialState: (data?: T) => LoadableState<T>;
  getSelectors: (
    selectState: Selector<Object, LoadableState<T>>,
  ) => LoadableSelectors<T>;

  load: <S extends LoadableState<T>>(state: S) => S;
  success: <S extends LoadableState<T>>(data: T, state: S) => S;
  fail: <S extends LoadableState<T>>(state: S) => S;
}

export function createLoadableAdapter<T>(): LoadableAdapter<T> {
  const createInitialState = (data: T = null): LoadableState<T> => {
    return {
      loaded: false,
      loading: false,
      data,
    };
  };

  const getSelectors = (selectState: Selector<Object, LoadableState<T>>) => {
    return {
      selectLoaded: createSelector(
        selectState,
        s => s.loaded,
      ),
      selectLoading: createSelector(
        selectState,
        s => s.loading,
      ),
      selectData: createSelector(
        selectState,
        s => s.data,
      ),
    };
  };

  const load: LoadableAdapter<T>['load'] = state => {
    return {
      ...state,
      loading: true,
    };
  };

  const success: LoadableAdapter<T>['success'] = (data, state) => {
    return {
      ...state,
      loaded: true,
      loading: false,
      data,
    };
  };

  const fail: LoadableAdapter<T>['fail'] = state => {
    return {
      ...state,
      loaded: true,
      loading: false,
    };
  };

  return {
    createInitialState,
    getSelectors,
    load,
    success,
    fail,
  };
}
