import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import {
  loadTasks,
  loadTasksFailure,
  loadTasksSuccess,
  saveTask,
  saveTaskSuccess,
  saveTaskFailure,
  deleteTask,
  deleteTaskSuccess,
  deleteTaskFailure
} from "./actions";
import {
  catchError,
  switchMap,
  map,
  mergeMap,
  mergeMapTo
} from "rxjs/operators";
import { of } from "rxjs";
import { TaskResource } from "../../api";

@Injectable()
export class TaskEffects {
  loadTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTasks),
      switchMap(() =>
        this.taskResource.getAll().pipe(
          map(tasks => loadTasksSuccess({ tasks })),
          catchError(() => of(loadTasksFailure()))
        )
      )
    )
  );

  deleteTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteTask),
      switchMap(({ id }) =>
        this.taskResource.delete(id).pipe(
          mergeMapTo([deleteTaskSuccess(), loadTasks()]),
          catchError(() => of(deleteTaskFailure()))
        )
      )
    )
  );

  saveTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(saveTask),
      switchMap(({ task, id }) => {
        const saved$ =
          id != null
            ? this.taskResource.update(id, task)
            : this.taskResource.store(task);

        return saved$.pipe(
          mergeMap(task => [saveTaskSuccess({ task }), loadTasks()]),
          catchError(() => of(saveTaskFailure()))
        );
      })
    )
  );

  constructor(private taskResource: TaskResource, private actions$: Actions) {}
}
