import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Ant } from './app-ant/ant';

@Injectable({
  providedIn: 'root'
})
export class cartServiceNewService {
  private _items: Ant[] = [];
  private _itemsSubject: BehaviorSubject<Ant[]> = new BehaviorSubject(this._items);
  public items: Observable<Ant[]> = this._itemsSubject.asObservable();
  
  constructor() {}

  addToCarrito(ant: Ant): void {
    let item: Ant | undefined = this._items.find((v1) => v1.name === ant.name);
    if (!item) {
      this._items.push({...ant});
    } else {
      item.quantity += ant.quantity;
    }
    this._itemsSubject.next([...this._items]);
  } 
}
