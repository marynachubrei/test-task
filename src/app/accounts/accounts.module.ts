import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountsOverviewComponent } from './accounts-overview/accounts-overview.component';
import {RouterOutlet} from "@angular/router";
import { PerformanceMetricsComponent } from './performance-metrics/performance-metrics.component';
import {WrapperComponent} from "../shared/components/wrapper/wrapper.component";
import { PolicyCardComponent } from './policy-card/policy-card.component';
import { PoliciesComponent } from './policies/policies.component';
import { AccountStatusComponent } from './account-status/account-status.component';
import {CheckIconComponent} from "../shared/components/check-icon/check-icon.component";
import { ComplianceAndDocumentationComponent } from './compliance-and-documentation/compliance-and-documentation.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import {LineChartComponent} from "../shared/components/line-chart/line-chart.component";
import {ProgressBarComponent} from "../shared/components/progress-bar/progress-bar.component";
import { CommunicationComponent } from './communication/communication.component';
import {SearchComponent} from "../shared/components/search/search.component";
import {ButtonComponent} from "../shared/components/button/button.component";
import {StrengthIndicatorComponent} from "../shared/components/strength-indicator/strength-indicator.component";
import {
  GetStrengthIndicatorLevelPipe
} from "../shared/pipes/get-strength-indicator-level/get-strength-indicator-level.pipe";
import {MatIconModule} from "@angular/material/icon";
import {StatusComponent} from "../shared/components/status/status.component";
import {TrendCardComponent} from "../shared/components/trend-card/trend-card.component";
import {ActionButtonComponent} from "../shared/components/action-button/action-button.component";
import {EffectsModule} from "@ngrx/effects";
import {AccountsEffects} from "./state/accounts.effects";
import { WinnabilityComponent } from './winnability/winnability.component';
import { PoliciesDataComponent } from './policies-data/policies-data.component';
import {TableComponent} from "../shared/components/table/table.component";



@NgModule({
  declarations: [
    AccountsOverviewComponent,
    PerformanceMetricsComponent,
    PolicyCardComponent,
    PoliciesComponent,
    AccountStatusComponent,
    ComplianceAndDocumentationComponent,
    AccountDetailsComponent,
    CommunicationComponent,
    WinnabilityComponent,
    PoliciesDataComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    WrapperComponent,
    CheckIconComponent,
    LineChartComponent,
    ProgressBarComponent,
    SearchComponent,
    ButtonComponent,
    StrengthIndicatorComponent,
    GetStrengthIndicatorLevelPipe,
    MatIconModule,
    StatusComponent,
    TrendCardComponent,
    ActionButtonComponent,
    EffectsModule.forFeature([AccountsEffects]),
    TableComponent,
  ]
})
export class AccountsModule { }
