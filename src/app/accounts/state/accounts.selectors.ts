import { createFeatureSelector, createSelector } from "@ngrx/store";
import {DashboardStateInterface} from "./dashboard.interface";

export const DASHBOARD_STATE_NAME = "dashboard-state";
export const getDashboardState = createFeatureSelector<DashboardStateInterface>(DASHBOARD_STATE_NAME);

export const getWorkQueue = createSelector(getDashboardState, (state)=>state?.workQueue)
export const getAccountList = createSelector(getDashboardState, (state)=>state?.accountList)
