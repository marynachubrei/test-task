import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {DashboardConstants} from "../common/constants";
import {Account, WorkQueue} from "../common/models";

@Injectable({providedIn: 'root'})

export class DashboardService {
  constructor(
    //@Inject("baseApiUrl") private baseUrl: string,
    http: HttpClient,
    // private manageLocalstorageService: ManageLocalstorageService,
  ) {
    // super(http);
    // this.setBaseApiUrl(this.baseUrl);
  }

  gerWorkQueue(id: string): Observable<WorkQueue[]>{
    return of(DashboardConstants.WORK_QUEUE_DATA);
  }

  gerAccountList(): Observable<Account[]>{
    return of(DashboardConstants.ACCOUNT_LIST_DATA);
  }
}
