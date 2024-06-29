import { Component, OnInit } from '@angular/core';
import { cartServiceNewService } from '../cartService-new.service';
import { Ant } from '../app-ant/ant';

@Component({
  selector: 'app-app-carrito-componente',
  templateUrl: './app-carrito-componente.component.html',
  styleUrls: ['./app-carrito-componente.component.css']
})
export class AppCarritoComponenteComponent  {
  Ant: Ant[] = [];
  total: number = 0; // Corrected type to number
  
  constructor(private carritoServicio: cartServiceNewService) {}
 
  quantity: number = 0;

  ngOnInit(): void {
    this.carritoServicio.items.subscribe(data => {
      this.Ant = data;
      this.sumar();
    });
  }

  sumar(): void {
    let sumita = 0;
    this.Ant.forEach(ant => {
      sumita += (ant.price*ant.quantity); // Assuming you want to sum the total price
    });
    this.total = sumita;
    console.log(this.total);
  }
}