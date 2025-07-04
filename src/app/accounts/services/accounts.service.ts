import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {AccountsConstants} from "../common/constants";
import {Communication, PerformanceMetric, Policy, PolicyData} from "../common/models";

@Injectable({providedIn: 'root'})

export class AccountsService {
  constructor(

  ) {
  }

  gerPerformanceMetrics(id: string): Observable<PerformanceMetric[]>{
    return of(AccountsConstants.PERFORMANCE_METRIC_CARDS);
  }

  getPolicies(id: string): Observable<Policy[]>{
    return of(AccountsConstants.POLICIES);
  }

  getCommunicationData(id: string): Observable<Communication[]>{
    return of(AccountsConstants.COMMUNICATION_DATA);
  }

  getPoliciesData(id: string): Observable<PolicyData[]>{
    return of(AccountsConstants.POLICIES_DATA);
  }
}
