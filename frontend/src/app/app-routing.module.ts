import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExploreComponent } from './page/explore/explore.component';
import { LoginComponent } from './page/login/login.component';

const routes: Routes = 
[
	{ path: '', component: ExploreComponent },
	{ path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
