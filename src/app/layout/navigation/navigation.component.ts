import {Component, OnInit} from '@angular/core';
import {IconConstants} from "../../shared/icons/icon-constants";
import {Router} from "@angular/router";
import {RoutingConstants} from "../../shared/commons/constants/routing-constants";
import {NavigationTab} from "../commons/models";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  navButtons: NavigationTab[] = [
    {
      icon: IconConstants.dashboard,
      name: "Dashboard",
      isSelected: false,
      routeName: RoutingConstants.DASHBOARD
    },
    {
      icon: IconConstants.account,
      name: "Accounts",
      isSelected: false,
      routeName: RoutingConstants.ACCOUNTS
    },
    {
      icon: IconConstants.broker,
      name: "Brokers",
      isSelected: false,
      routeName: RoutingConstants.BROKERS
    }
  ]
  selectedTab: NavigationTab|undefined ;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.setSelectedTab();
  }

  setSelectedTab(tab?: NavigationTab): void {
    this.selectedTab = tab ? tab : this.navButtons.find(item=>this.router.url.includes(item.routeName))
  }

  navigateTo(tab: NavigationTab): void{
    this.setSelectedTab(tab);
    this.router.navigate([tab.routeName]);
  }
}
