import {RouterModule, Routes} from "@angular/router";
import {AuthComponent} from "./auth/auth.component";
import {NgModule} from "@angular/core";

export const routes: Routes = [
  {
    path: "login",
    component: AuthComponent
  },
  {
    path: "",
    component: AuthComponent
  },
  {
    path: "documents",
    //component: DocumentsComponent,
    loadChildren: () => import("./documents/documents.module").then((m) => m.DocumentsModule),

  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
