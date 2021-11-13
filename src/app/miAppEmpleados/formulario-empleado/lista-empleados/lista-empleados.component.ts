import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from '../../modelo/Empleado';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {


  @Input() miEmpleado: Empleado;
  constructor() { }

  ngOnInit(): void {
  }

  empleados: Empleado[] = [
        new Empleado("Alejandro", "Alonso Figueroa", 20),
        new Empleado("José", "Lopéz Martinéz", 23),
        new Empleado("Maria", "Vazquéz", 33)

  ];

  añadirEmpleado(empTemp: Empleado){
    this.empleados.push(empTemp);
  }

}
