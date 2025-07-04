import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {WorkQueue} from "../common/models";
import {Store} from "@ngrx/store";
import {AppState} from "../../shared/states/app.state";
import {getWorkQueueStart} from "../state/dashboard.actions";
import {getWorkQueue} from "../state/dashboard.selectors";
import {DashboardConstants} from "../common/constants";

@Component({
  selector: 'app-work-queue',
  templateUrl: './work-queue.component.html',
  styleUrls: ['./work-queue.component.scss']
})
export class WorkQueueComponent implements OnInit {
  tableButtons= DashboardConstants.WORK_QUEUE_TABLE_ACTIONS;
  tableColumns = DashboardConstants.WORK_QUEUE_TABLE_DATA;
  titles = DashboardConstants.TITLES;
  userData$!: Observable<WorkQueue[]| null>;


  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.store.dispatch(getWorkQueueStart({id:'1'}));
    this.userData$ = this.store.select(getWorkQueue);
  }
}
