import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {AppMaterialModule} from './app-material.module';
import {DummyComponent} from './component/dummy/dummy.component';
import {HelpComponent} from './component/help/help.component';
import {HomeComponent} from './home/home.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {JWTInterceptorService} from "./common/jwtinterceptor.service";
import { PhonePipe } from './common/phone.pipe';
import { ConsumerListComponent } from './consumer/consumer-list/consumer-list.component';
import { ConsumerFicheComponent } from './consumer/consumer-fiche/consumer-fiche.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DummyComponent,
    HelpComponent,
    HomeComponent,
    PhonePipe,
    ConsumerListComponent,
    ConsumerFicheComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppMaterialModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass: JWTInterceptorService, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
