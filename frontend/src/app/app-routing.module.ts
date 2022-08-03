import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExploreComponent } from './page/explore/explore.component';
import { LoginComponent } from './page/login/login.component';
import { CardComponent } from './page/card/card.component';
import { RegisterComponent } from './page/register/register.component';
import { PortalComponent } from './page/portal/portal.component';
import {AuthGuard} from './guard/auth.guard';

const routes: Routes = 
[
	{ path: '', component: ExploreComponent },
	{ path: 'login', component: LoginComponent },
  	{ path: 'card', component: CardComponent, canActivate: [ AuthGuard ] },
	{ path: 'register', component: RegisterComponent},
	{ path: 'portal', component: PortalComponent, canActivate: [ AuthGuard ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
