import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {AuthentificationGuard} from "./login/authentification.guard";
import {ConsumerListComponent} from "./consumer/consumer-list/consumer-list.component";

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'consumer-list', component: ConsumerListComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthentificationGuard]},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
