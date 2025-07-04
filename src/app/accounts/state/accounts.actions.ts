import { createAction, props } from "@ngrx/store";
import {Communication, PerformanceMetric, Policy, PolicyData, ProgressMetric} from "../common/models";

export const GET_PERFORMANCE_METRICS_START = "[ACCOUNTS STATE] Get progress metrics start";
export const GET_PERFORMANCE_METRICS_SUCCESS = "[ACCOUNTS STATE] Get progress metrics success";
export const GET_PERFORMANCE_METRICS_FAILURE = "[ACCOUNTS STATE] Get progress metrics failure";

export const GET_POLICIES_START = "[ACCOUNTS STATE] Get policies start";
export const GET_POLICIES_SUCCESS = "[ACCOUNTS STATE] Get policies success";
export const GET_POLICIES_FAILURE = "[ACCOUNTS STATE] Get policies failure";

export const GET_COMMUNICATION_DATA_START = "[ACCOUNTS STATE] Get communication data start";
export const GET_COMMUNICATION_DATA_SUCCESS = "[ACCOUNTS STATE] Get communication data success";
export const GET_COMMUNICATION_DATA_FAILURE = "[ACCOUNTS STATE] Get communication data failure";

export const GET_POLICIES_DATA_START = "[ACCOUNTS STATE] Get policies data start";
export const GET_POLICIES_DATA_SUCCESS = "[ACCOUNTS STATE] Get policies data success";
export const GET_POLICIES_DATA_FAILURE = "[ACCOUNTS STATE] Get policies data failure";


export const getPerformanceMetricsStart = createAction(GET_PERFORMANCE_METRICS_START, props<{ id: string }>());
export const getPerformanceMetricsSuccess = createAction(GET_PERFORMANCE_METRICS_SUCCESS, props<{ performanceMetrics: PerformanceMetric[] }>());
export const getPPerformanceMetricsFailure = createAction(GET_PERFORMANCE_METRICS_FAILURE);

export const getPoliciesStart = createAction(GET_POLICIES_START, props<{ id: string }>());
export const getPoliciesSuccess = createAction(GET_POLICIES_SUCCESS, props<{ policies: Policy[] }>());
export const getPoliciesFailure = createAction(GET_POLICIES_FAILURE);

export const getCommunicationDataStart = createAction(GET_COMMUNICATION_DATA_START, props<{ id: string }>());
export const getCommunicationDataSuccess = createAction(GET_COMMUNICATION_DATA_SUCCESS, props<{ communicationData: Communication[] }>());
export const getCommunicationDataFailure = createAction(GET_COMMUNICATION_DATA_FAILURE);

export const getPoliciesDataStart = createAction(GET_POLICIES_DATA_START, props<{ id: string }>());
export const getPoliciesDataSuccess = createAction(GET_POLICIES_DATA_SUCCESS, props<{ policiesData: PolicyData[] }>());
export const getPoliciesDataFailure = createAction(GET_POLICIES_DATA_FAILURE);
