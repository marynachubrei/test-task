import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {OverviewComponent} from "./overview/overview.component";

export const routes: Routes = [
  {
    path: "",
    component: OverviewComponent,
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class DashboardRoutingModule { }
