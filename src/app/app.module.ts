import { NgModule } from '@angular/core';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser';
//import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatTableModule} from "@angular/material/table";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {MatIconModule, MatIconRegistry} from "@angular/material/icon";
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import {SearchComponent} from "./shared/components/search/search.component";
import {UserInitialsComponent} from "./shared/components/user-initials/user-initials.component";
import { NavigationComponent } from './layout/navigation/navigation.component';
import {ButtonComponent} from "./shared/components/button/button.component";
import {CommonModule} from "@angular/common";
import {EffectsModule} from "@ngrx/effects";
import {UserEffects} from "./shared/states/user-state/user.effects";
import { StoreModule } from "@ngrx/store";
import {appReducer} from "./shared/states/app.state";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatTableModule,
    HttpClientModule,
    SearchComponent,
    UserInitialsComponent,
    ButtonComponent,
    CommonModule,
    MatIconModule,
    StoreModule.forRoot(appReducer, {
      runtimeChecks: {
        strictStateImmutability: false,
        strictActionImmutability: false,
      },
    }),
    EffectsModule.forRoot([
      UserEffects
    ]),
    StoreDevtoolsModule.instrument({
     logOnly: true,
   }),
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      'threeDots',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/three-dots.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'account',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/account.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'broker',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/broker.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'dashboard',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/dashboard.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'check',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/check.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'ship',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/ship.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'general',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/general.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'worker',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/worker.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'property',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/property.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'umbrella',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/umbrella.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'arrowUp',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/arrow-up.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'arrowDown',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/arrow-down.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'rocket',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/rocket.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'paperclip',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/paperclip.svg'
      )
    );
  }
}
