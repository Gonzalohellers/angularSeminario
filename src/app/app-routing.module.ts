import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppAntComponent } from './app-ant/app-ant.component';
import { AppCarritoComponenteComponent } from './app-carrito-componente/app-carrito-componente.component';
import { BreweryAboutComponent } from './brewery-about/brewery-about.component';
import { HomeComponent } from './home/home.component';

const routes: Routes=[
  {path:"", redirectTo:'home', pathMatch:'full'},
  { path: 'home', component: HomeComponent },
  {path:"ants", component:AppAntComponent},
  {path:"about", component:BreweryAboutComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
