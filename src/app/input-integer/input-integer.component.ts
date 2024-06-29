import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.css'
})
export class InputIntegerComponent {
   @Input() quantity!: number;
  @Output()
  quantityChange:EventEmitter<Number>=new EventEmitter<Number>();
  @Input() max!:number;
  
  upQuantity():void{
    if(this.quantity < this.max){
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }
  }

  downQuantity():void{
    if(this.quantity>0){
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }

 
  verifyQuantity(){
    if(0>this.quantity || this.quantity> this.max){
      this.quantity=0;
      this.quantityChange.emit(this.quantity);
    }
    else{
      this.quantity
    }
  }

  emitQuantityChange(): void {
    this.verifyQuantity();
    this.quantityChange.emit(this.quantity);
  }
}