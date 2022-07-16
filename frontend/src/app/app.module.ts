import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { LoginComponent } from './page/login/login.component';
import { ExploreComponent } from './page/explore/explore.component';
import { CardComponent } from './page/card/card.component';
import { GuestNavComponent } from './component/guest-nav/guest-nav.component'; 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ExploreComponent,
    CardComponent,
    GuestNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
