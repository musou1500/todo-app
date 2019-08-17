import { createAction, props, union } from "@ngrx/store";
import { Task } from "../../models";

export const loadTasks = createAction("[Task] Load Tasks");
export const loadTasksFailure = createAction("[Task] Load Tasks Failure");
export const loadTasksSuccess = createAction(
  "[Task] Load Tasks Success",
  props<{ tasks: Task[] }>()
);

export const saveTask = createAction(
  "[Task] Save Task",
  props<{ task: Partial<Task>; id?: number }>()
);
export const saveTaskFailure = createAction("[Task] Save Task Failure");
export const saveTaskSuccess = createAction(
  "[Task] Save Task Success",
  props<{ task: Task }>()
);
export const selectTask = createAction(
  "[Task] Select Task",
  props<{ task: Task | null }>()
);
export const deleteTask = createAction(
  "[Task] Delete Task Failure",
  props<{ id: number }>()
);
export const deleteTaskFailure = createAction("[Task] Delete Task Failure");
export const deleteTaskSuccess = createAction("[Task] Delete Task Success");
const actions = union({
  loadTasks,
  loadTasksFailure,
  loadTasksSuccess,
  saveTask,
  saveTaskFailure,
  saveTaskSuccess,
  deleteTask,
  deleteTaskSuccess,
  deleteTaskFailure,
  selectTask
});

export type TaskActionsUnion = typeof actions;
