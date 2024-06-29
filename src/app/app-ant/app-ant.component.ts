import { Component, OnInit } from '@angular/core';
import { Ant } from './ant';
import { AntServiceService } from '../ant-service.service';
import { cartServiceNewService } from '../cartService-new.service';

@Component({
  selector: 'app-app-ant',
  templateUrl: './app-ant.component.html',
  styleUrls: ['./app-ant.component.css']
})
export class AppAntComponent implements OnInit {
  Ant: Ant[] = [];

  constructor(private carritoServicio: cartServiceNewService, private antService: AntServiceService) { }

  ngOnInit(): void {
    this.antService.getAll()
      .subscribe(hormigas => this.Ant = hormigas);
  }

  addToCarrito(ant: Ant): void {
    this.carritoServicio.addToCarrito(ant);
    ant.stock -= ant.quantity;
  }
}
