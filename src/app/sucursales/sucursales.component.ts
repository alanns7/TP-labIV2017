import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.component.html',
  styleUrls: ['./sucursales.component.css']
})
export class SucursalesComponent implements OnInit {

  direccion;
  foto;
  encargado;
  empleados;
  ofertas;
  pedidos;


  constructor() { }

  ngOnInit() {
  }

}
