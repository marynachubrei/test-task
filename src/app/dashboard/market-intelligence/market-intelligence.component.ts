import { Component } from '@angular/core';
import {DashboardConstants} from "../common/constants";

@Component({
  selector: 'app-market-intelligence',
  templateUrl: './market-intelligence.component.html',
  styleUrls: ['./market-intelligence.component.scss']
})
export class MarketIntelligenceComponent {
  titles = DashboardConstants.TITLES;
}
