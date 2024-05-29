import { style } from '@angular/animations';
import { Component} from '@angular/core';
import { Beer } from './beer';


@Component({
  selector: 'app-app-beer',
  templateUrl: './app-beer.component.html',
  styleUrl: './app-beer.component.css'
})
export class AppBeerComponent {
  beer: Beer[]=[{
    id:1,
    name:'sdaas',
    type:"sasa",
    img:"notiene",
    price:12,
    stock:100,
    quantity:0,
  },
  {
    id:2,
    name:"Cervecita 2",
    type: "Roja",
    img: "notiene",
    price:45,
    stock:0,
    quantity:0,
  },
  {
    id:3,
    name:"Cervecita 3",
    type:"amarilla(?",
    img:"notiene",
    price:35,
    stock:50,
    quantity:0,
  }
]
  constructor(){}

  upQuantity(beer:Beer):void{
    if(beer.quantity<beer.stock){
      beer.quantity++;
    }
  }

  downQuantity(beer:Beer):void{
    if(beer.quantity>0){
      beer.quantity--;
    }
  }

  verifyQuantity(beer:Beer){
    if(0>beer.quantity || beer.quantity>beer.stock){
      beer.quantity=0;
    }
  }

}
