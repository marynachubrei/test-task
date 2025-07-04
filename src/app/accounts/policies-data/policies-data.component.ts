import {Component, OnInit} from '@angular/core';
import {AccountsConstants} from "../common/constants";
import {PolicyData} from "../common/models";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {AppState} from "../../shared/states/app.state";
import {getPoliciesDataStart} from "../state/accounts.actions";
import {getPoliciesData} from "../state/accounts.selectors";

@Component({
  selector: 'app-policies-data',
  templateUrl: './policies-data.component.html',
  styleUrls: ['./policies-data.component.scss']
})
export class PoliciesDataComponent implements OnInit {
  policiesDataColumns = AccountsConstants.POLICIES_DATA_COLUMNS;
  policiesDataActions = AccountsConstants.COMMUNICATION_ACTIONS;
  titles = AccountsConstants.TITLES;
  policiesData$!: Observable<PolicyData[]|null>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.store.dispatch(getPoliciesDataStart({id:'1'}));
    this.policiesData$ = this.store.select(getPoliciesData)
  }
}
