import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {PerformanceMetric} from "../common/models";
import {AppState} from "../../shared/states/app.state";
import {Store} from "@ngrx/store";
import {getPerformanceMetrics} from "../state/accounts.selectors";
import {getPerformanceMetricsStart} from "../state/accounts.actions";

@Component({
  selector: 'app-performance-metrics',
  templateUrl: './performance-metrics.component.html',
  styleUrls: ['./performance-metrics.component.scss']
})
export class PerformanceMetricsComponent implements OnInit {
  performanceMetrics$!: Observable<PerformanceMetric[]|null>;
  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.store.dispatch(getPerformanceMetricsStart({id: "1"}));
    this.performanceMetrics$ = this.store.select(getPerformanceMetrics);
  }

  protected readonly performance = performance;
}
