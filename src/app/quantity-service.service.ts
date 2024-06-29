import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class QuantityServiceService {

  private quantitySubject = new BehaviorSubject<number>(0);
  quantity$ = this.quantitySubject.asObservable();
  
  constructor() { }

  setQuantity(quantity: number): void {
    this.quantitySubject.next(quantity);
  }

  getQuantity(): number {
    return this.quantitySubject.getValue();
  }
}
