import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Ant } from '../app-ant/ant';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.css'
})
export class InputIntegerComponent {
  @Input() quantity!: number;

  @Input() max!:number;
  
  upQuantity(quantity: number):void{
    if(quantity < this.max){
      this.quantity++;
    }
  }

  downQuantity(quantity:number):void{
    if(this.quantity>0){
      this.quantity--;
    }
  }

  verifyQuantity(quantity:number){
    if(0>quantity || quantity> this.max){
      this.quantity=0;
    }
  }
}