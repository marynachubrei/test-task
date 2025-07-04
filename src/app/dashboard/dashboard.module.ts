import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview/overview.component';
import { routes} from "./dashboard.routes";
import {RouterModule} from "@angular/router";
import {ButtonComponent} from "../shared/components/button/button.component";
import {TableComponent} from "../shared/components/table/table.component";
import {WrapperComponent} from "../shared/components/wrapper/wrapper.component";
import {ProgressBarComponent} from "../shared/components/progress-bar/progress-bar.component";
import { PortfolioGoalComponent } from './portfolio-goal/portfolio-goal.component';
import { QuickActionsComponent } from './quick-actions/quick-actions.component';
import { MarketIntelligenceComponent } from './market-intelligence/market-intelligence.component';
import { AccountsComponent } from './accounts/accounts.component';
import {SearchComponent} from "../shared/components/search/search.component";
import {ActionButtonComponent} from "../shared/components/action-button/action-button.component";
import { WorkQueueComponent } from './work-queue/work-queue.component';
import {EffectsModule} from "@ngrx/effects";
import {DashboardEffects} from "./state/dashboard.effects";



@NgModule({
  declarations: [
    OverviewComponent,
    PortfolioGoalComponent,
    QuickActionsComponent,
    MarketIntelligenceComponent,
    AccountsComponent,
    WorkQueueComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([DashboardEffects]),
    ButtonComponent,
    TableComponent,
    WrapperComponent,
    ProgressBarComponent,
    SearchComponent,
    ActionButtonComponent,
  ]
})
export class DashboardModule { }
