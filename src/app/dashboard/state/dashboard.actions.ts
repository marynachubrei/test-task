import { createAction, props } from "@ngrx/store";
import {Account, WorkQueue} from "../common/models";

export const GET_WORK_QUEUE_START = "[DASHBOARD STATE] Get work queue start";
export const GET_WORK_QUEUE_SUCCESS = "[DASHBOARD STATE] Get work queue success";
export const GET_WORK_QUEUE_FAILURE = "[DASHBOARD STATE] Get work queue failure";

export const GET_ACCOUNT_LIST_START = "[DASHBOARD STATE] Get account list start";
export const GET_ACCOUNT_LIST_SUCCESS = "[DASHBOARD STATE] Get account list success";
export const GET_ACCOUNT_LIST_FAILURE = "[DASHBOARD STATE] Get account list failure";

export const getWorkQueueStart = createAction(GET_WORK_QUEUE_START, props<{ id: string }>());
export const getWorkQueueSuccess = createAction(GET_WORK_QUEUE_SUCCESS, props<{ workQueue: WorkQueue[] }>());
export const getWorkQueueFailure = createAction(GET_WORK_QUEUE_FAILURE);

export const getAccountListStart = createAction(GET_ACCOUNT_LIST_START);
export const getAccountListSuccess = createAction(GET_ACCOUNT_LIST_SUCCESS, props<{ accountList: Account[] }>());
export const getAccountListFailure = createAction(GET_ACCOUNT_LIST_FAILURE);
