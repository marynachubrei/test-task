import {Injectable} from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import {of} from "rxjs";
import { catchError, map, mergeMap, take, tap } from "rxjs/operators";
import {DashboardService} from "../services/dashboard.service";
import {
  getAccountListStart,
  getAccountListSuccess,
  getWorkQueueFailure,
  getWorkQueueStart,
  getWorkQueueSuccess
} from "./dashboard.actions";
import {Account, WorkQueue} from "../common/models";

@Injectable()
export class DashboardEffects {
  constructor(
    private actions$: Actions,
    private dashboardService: DashboardService,
  ) {
  }

  getWorkQueue$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getWorkQueueStart),
      mergeMap((action) =>
        this.dashboardService.gerWorkQueue(action.id).pipe(
          map((workQueue: WorkQueue[]) => {
            console.log(workQueue)
            return getWorkQueueSuccess({ workQueue });
          }),
          catchError(() => {
            return of(
              getWorkQueueFailure(),
            );
          }),
        ),
      ),
    ),
  );

  getAccountList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAccountListStart),
      mergeMap((action) =>
        this.dashboardService.gerAccountList().pipe(
          map((accountList: Account[]) => {
            return getAccountListSuccess({ accountList });
          }),
          catchError(() => {
            return of(
              getWorkQueueFailure(),
            );
          }),
        ),
      ),
    ),
  );
}
