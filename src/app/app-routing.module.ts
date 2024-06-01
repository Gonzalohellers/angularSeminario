import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppBeerComponent } from './app-beer/app-beer.component';
import { AppCarritoComponenteComponent } from './app-carrito-componente/app-carrito-componente.component';
import { BreweryAboutComponent } from './brewery-about/brewery-about.component';

const routes: Routes=[
  {path:"", redirectTo:'beers', pathMatch:'full'},
  {path:"beers", component:AppBeerComponent},
  {path:"about", component:BreweryAboutComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
