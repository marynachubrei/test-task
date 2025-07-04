import { Action, createReducer, on } from "@ngrx/store";
import {AccountsState} from "./accounts.state";
import {
  getCommunicationDataSuccess,
  getPerformanceMetricsSuccess,
  getPoliciesDataSuccess,
  getPoliciesSuccess
} from "./accounts.actions";
import {AccountsStateInterface} from "./accounts.interface";

const _accountReducer = createReducer(
  AccountsState,
  on(getPerformanceMetricsSuccess, (state, action) => ({
    ...state,
    performanceMetrics: action.performanceMetrics,
  })),
  on(getPoliciesSuccess, (state, action) => ({
    ...state,
    policies: action.policies,
  })),
  on(getCommunicationDataSuccess, (state, action) => ({
    ...state,
    communicationData: action.communicationData,
  })),
  on(getPoliciesDataSuccess, (state, action) => ({
    ...state,
    policiesData: action.policiesData,
  })),
);

export function accountsReducer(state: AccountsStateInterface | undefined, action: Action) {
  return _accountReducer(state, action);
}
