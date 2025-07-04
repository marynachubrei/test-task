import { Action, createReducer, on } from "@ngrx/store";
import {DashboardState} from "./dashboard.state";
import {getAccountListSuccess, getWorkQueueSuccess} from "./dashboard.actions";
import {DashboardStateInterface} from "./dashboard.interface";

const _dashboardReducer = createReducer(
  DashboardState,
  on(getWorkQueueSuccess, (state, action) => ({
    ...state,
    workQueue: action.workQueue,
  })),
  on(getAccountListSuccess, (state, action) => ({
    ...state,
    accountList: action.accountList,
  })),
);

export function dashboardReducer(state: DashboardStateInterface | undefined, action: Action) {
  return _dashboardReducer(state, action);
}
