import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppAntComponent } from './app-ant/app-ant.component';
import { AppCarritoComponenteComponent } from './app-carrito-componente/app-carrito-componente.component';
import { BreweryAboutComponent } from './brewery-about/brewery-about.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { HomeComponent } from './home/home.component';
import { cartServiceNewService } from './cartService-new.service';
import { AntServiceService } from './ant-service.service';

@NgModule({
  declarations: [
    AppComponent,
    AppAntComponent,
    AppCarritoComponenteComponent,
    BreweryAboutComponent,
    InputIntegerComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AntServiceService, cartServiceNewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
