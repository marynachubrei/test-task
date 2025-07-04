import { Component } from '@angular/core';
import {DashboardConstants} from "../common/constants";

@Component({
  selector: 'app-quick-actions',
  templateUrl: './quick-actions.component.html',
  styleUrls: ['./quick-actions.component.scss']
})
export class QuickActionsComponent {
  quickActions = DashboardConstants.QUICK_ACTIONS;
  titles = DashboardConstants.TITLES;
}
