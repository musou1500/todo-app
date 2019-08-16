import {
  TaskActionsUnion,
  loadTasks,
  loadTasksSuccess,
  loadTasksFailure,
  selectTask,
} from './actions';
import {Task} from '../../models';
import {createFeatureSelector, createReducer, on} from '@ngrx/store';
import {
  LoadableListState,
  createLoadableListAdapter,
} from '../../lib/ngrx-loadable';

export type TaskState = LoadableListState<Task>;

const adapter = createLoadableListAdapter<Task>();

export const selectTaskState = createFeatureSelector<TaskState>('task');

export const {
  selectLoaded,
  selectLoading,
  selectData: selectTasks,
  selectSelected: selectSelectedTask,
} = adapter.getSelectors(selectTaskState);

const taskReducer = createReducer(
  adapter.createInitialState(),
  on(loadTasks, state => adapter.load(state)),
  on(loadTasksSuccess, (state, {tasks}) => adapter.success(tasks, state)),
  on(loadTasksFailure, state => adapter.fail(state)),
  on(selectTask, (state, {task}) => adapter.select(task, state)),
);

export function reducer(state: TaskState, action: TaskActionsUnion) {
  return taskReducer(state, action);
}
