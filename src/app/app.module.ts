import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppBeerComponent } from './app-beer/app-beer.component';
import { AppCarritoComponenteComponent } from './app-carrito-componente/app-carrito-componente.component';


@NgModule({
  declarations: [
    AppComponent,
    AppBeerComponent,
    AppCarritoComponenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
