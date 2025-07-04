import {UserStateInterface} from "./user-state/user.interface";
import {USER_STATE_NAME} from "./user-state/user.selectors";
import {userReducer} from "./user-state/user.reducer";
import {DASHBOARD_STATE_NAME} from "../../dashboard/state/dashboard.selectors";
import {DashboardStateInterface} from "../../dashboard/state/dashboard.interface";
import {dashboardReducer} from "../../dashboard/state/dashboard.reducer";
import {ACCOUNTS_STATE_NAME} from "../../accounts/state/accounts.selectors";
import {AccountsStateInterface} from "../../accounts/state/accounts.interface";
import {accountsReducer} from "../../accounts/state/accounts.reducer";

export interface AppState {
  [USER_STATE_NAME]: UserStateInterface;
  [DASHBOARD_STATE_NAME]: DashboardStateInterface;
  [ACCOUNTS_STATE_NAME]: AccountsStateInterface
}

export const appReducer = {
  [USER_STATE_NAME]: userReducer,
  [DASHBOARD_STATE_NAME]: dashboardReducer,
  [ACCOUNTS_STATE_NAME]: accountsReducer,}
