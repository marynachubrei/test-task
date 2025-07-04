import {Injectable} from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import {of} from "rxjs";
import { catchError, map, mergeMap, take, tap } from "rxjs/operators";
import {AccountsService} from "../services/accounts.service";

import {Communication, PerformanceMetric, Policy, PolicyData} from "../common/models";
import {
  getCommunicationDataFailure,
  getCommunicationDataStart,
  getCommunicationDataSuccess,
  getPerformanceMetricsStart,
  getPerformanceMetricsSuccess,
  getPoliciesDataStart,
  getPoliciesDataSuccess,
  getPoliciesFailure,
  getPoliciesStart,
  getPoliciesSuccess,
  getPPerformanceMetricsFailure
} from "./accounts.actions";
import {getPoliciesData} from "./accounts.selectors";

@Injectable()
export class AccountsEffects {
  constructor(
    private actions$: Actions,
    private accountsService: AccountsService,
  ) {
  }

  getPerformanceMetrics$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPerformanceMetricsStart),
      mergeMap((action) =>
        this.accountsService.gerPerformanceMetrics(action.id).pipe(
          map((performanceMetrics: PerformanceMetric[]) => {
            console.log(performanceMetrics)
            return getPerformanceMetricsSuccess({ performanceMetrics });
          }),
          catchError(() => {
            return of(
              getPPerformanceMetricsFailure(),
            );
          }),
        ),
      ),
    ),
  );

  getPolicies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPoliciesStart),
      mergeMap((action) =>
        this.accountsService.getPolicies(action.id).pipe(
          map((policies: Policy[]) => {
            return getPoliciesSuccess({ policies });
          }),
          catchError(() => {
            return of(
              getPoliciesFailure(),
            );
          }),
        ),
      ),
    ),
  );

  getCommunicationData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCommunicationDataStart),
      mergeMap((action) =>
        this.accountsService.getCommunicationData(action.id).pipe(
          map((communicationData: Communication[]) => {
            return getCommunicationDataSuccess({ communicationData });
          }),
          catchError(() => {
            return of(
              getCommunicationDataFailure(),
            );
          }),
        ),
      ),
    ),
  );

  getPoliciesData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPoliciesDataStart),
      mergeMap((action) =>
        this.accountsService.getPoliciesData(action.id).pipe(
          map((policiesData: PolicyData[]) => {
            return getPoliciesDataSuccess({ policiesData });
          }),
          catchError(() => {
            return of(
              getCommunicationDataFailure(),
            );
          }),
        ),
      ),
    ),
  );
}
