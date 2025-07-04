import {Account, WorkQueue} from "../common/models";

export interface DashboardStateInterface {
  workQueue: WorkQueue[]|null;
  accountList: Account[]|null;
}
