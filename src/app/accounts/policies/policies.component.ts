import {Component, OnInit} from '@angular/core';
import {IconConstants} from "../../shared/icons/icon-constants";
import {Store} from "@ngrx/store";
import {AppState} from "../../shared/states/app.state";
import {Policy} from "../common/models";
import {Observable} from "rxjs";
import {getPoliciesStart} from "../state/accounts.actions";
import {getPolicies} from "../state/accounts.selectors";
import {AccountsConstants} from "../common/constants";

@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.scss']
})
export class PoliciesComponent implements OnInit {
  titles = AccountsConstants.TITLES
  policies$!: Observable<Policy[]| null>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.store.dispatch(getPoliciesStart({id: '1'}));
    this.policies$ = this.store.select(getPolicies)
  }
}
