import {Component, OnInit} from '@angular/core';
import {AccountsConstants} from "../common/constants";
import {AppState} from "../../shared/states/app.state";
import {Store} from "@ngrx/store";
import {getCommunicationDataStart} from "../state/accounts.actions";
import {Observable} from "rxjs";
import {Communication} from "../common/models";
import {getCommunicationData} from "../state/accounts.selectors";
import {IconConstants} from "../../shared/icons/icon-constants";

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.scss']
})
export class CommunicationComponent implements OnInit {
  communicationActions = AccountsConstants.COMMUNICATION_ACTIONS;
  icons = IconConstants;
  titles = AccountsConstants.TITLES;
  communicationData$!: Observable<Communication[] | null>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.store.dispatch(getCommunicationDataStart({id: '1'}));
    this.communicationData$ = this.store.select(getCommunicationData)
  }
}
