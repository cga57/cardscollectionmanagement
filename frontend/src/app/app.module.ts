import { Injectable, NgModule } from '@angular/core';
import { BrowserModule, HammerGestureConfig, HammerModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LoginComponent } from './page/login/login.component';
import { ExploreComponent } from './page/explore/explore.component';
import { CardComponent } from './page/card/card.component';
import { GuestNavComponent } from './component/guest-nav/guest-nav.component';
import { Carousel3dComponent } from './component/carousel3d/carousel3d.component'; 

import * as Hammer from 'hammerjs';

// hammer config
@Injectable() 
export class HammerConfig extends HammerGestureConfig
{
	override overrides =
	{
		swipe: { direction: Hammer.DIRECTION_ALL },
	};
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ExploreComponent,
    CardComponent,
    GuestNavComponent,
    Carousel3dComponent
  ],
  imports: [
    BrowserModule,
	HammerModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  providers:[
	  {
		  provide: HAMMER_GESTURE_CONFIG,
		  useClass: HammerConfig,
	  },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
