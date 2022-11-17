import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {AuthentificationGuard} from "./login/authentification.guard";
import {ConsumerListComponent} from "./consumer/consumer-list/consumer-list.component";
import {ConsumerFormComponent} from "./consumer/consumer-form/consumer-form.component";

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'consumer-list', component: ConsumerListComponent, canActivate: [AuthentificationGuard]},
  {path: 'consumer-form', component: ConsumerFormComponent, canActivate: [AuthentificationGuard]},
  {path: 'consumer-form/:id', component: ConsumerFormComponent, canActivate: [AuthentificationGuard]},
  {path: 'home', component: HomeComponent, canActivate: [AuthentificationGuard]},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
