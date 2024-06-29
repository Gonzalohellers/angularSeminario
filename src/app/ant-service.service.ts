import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Ant } from './app-ant/ant';

const url="https://667a18e318a459f63952518c.mockapi.io/ant"


@Injectable({
  providedIn: 'root'
})
export class AntServiceService {

  constructor(private http: HttpClient) { }

  getAll() :Observable<Ant[]>{
    return this.http.get<Ant[]>(url).pipe(
      tap((ants:Ant[])=> ants.forEach(ant=>ant.quantity=0))
     );
  }
}
