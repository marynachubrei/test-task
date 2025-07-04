import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Account} from "../common/models";
import {AppState} from "../../shared/states/app.state";
import {Store} from "@ngrx/store";
import {getAccountListStart} from "../state/dashboard.actions";
import {getAccountList} from "../state/dashboard.selectors";
import {DashboardConstants} from "../common/constants";

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {
  accountsColumns = DashboardConstants.ACCOUNT_COLUMNS;
  actionButtons = DashboardConstants.ACCOUNT_ACTION_BUTTONS;
  titles = DashboardConstants.TITLES;
  accountList$!: Observable<Account[]|null>;


  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(getAccountListStart());
    this.accountList$ = this.store.select(getAccountList);
  }
}
