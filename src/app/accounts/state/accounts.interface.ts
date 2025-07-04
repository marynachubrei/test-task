import {Communication, PerformanceMetric, Policy, PolicyData} from "../common/models";

export interface AccountsStateInterface {
  performanceMetrics: PerformanceMetric[]|null;
  policies: Policy[]|null;
  communicationData: Communication[]|null;
  policiesData: PolicyData[]|null;
}
