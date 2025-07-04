import { createFeatureSelector, createSelector } from "@ngrx/store";
import {AccountsStateInterface} from "./accounts.interface";

export const ACCOUNTS_STATE_NAME = "accounts-state";
export const getAccountsState = createFeatureSelector<AccountsStateInterface>(ACCOUNTS_STATE_NAME);

export const getPerformanceMetrics = createSelector(getAccountsState, (state)=>state?.performanceMetrics)
export const getPolicies = createSelector(getAccountsState, (state)=>state?.policies)
export const getCommunicationData = createSelector(getAccountsState, (state)=>state?.communicationData)
export const getPoliciesData = createSelector(getAccountsState, (state)=>state?.policiesData)
