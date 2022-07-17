import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExploreComponent } from './page/explore/explore.component';
import { LoginComponent } from './page/login/login.component';
import { CardComponent } from './page/card/card.component';
import { RegisterComponent } from './page/register/register.component';

const routes: Routes = 
[
	{ path: '', component: ExploreComponent },
	{ path: 'login', component: LoginComponent },
  	{ path: 'card', component: CardComponent},
	{ path: 'register', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
