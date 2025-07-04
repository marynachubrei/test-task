import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {LayoutComponent} from "./layout/layout.component";
import {OverviewComponent} from "./dashboard/overview/overview.component";
import {AccountsOverviewComponent} from "./accounts/accounts-overview/accounts-overview.component";
import {RoutingConstants} from "./shared/commons/constants/routing-constants";

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: "", redirectTo: `/${RoutingConstants.DASHBOARD}`, pathMatch: "full" },
      {
        path: `${RoutingConstants.DASHBOARD}`,
        component: OverviewComponent,
        loadChildren: () => import("./dashboard/dashboard.module").then((m) => m.DashboardModule),

      },
      {
        path: `${RoutingConstants.ACCOUNTS}`,
        component: AccountsOverviewComponent,
        loadChildren: () => import("./accounts/accounts.module").then((m) => m.AccountsModule),
      }
    ]
  },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
