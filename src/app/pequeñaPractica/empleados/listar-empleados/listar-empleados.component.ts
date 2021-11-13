import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from '../empleados.model';

@Component({
  selector: 'app-listar-empleados',
  templateUrl: './listar-empleados.component.html',
  styleUrls: ['./listar-empleados.component.css']
})
export class ListarEmpleadosComponent implements OnInit {


  @Input() empTemp: Empleado;
  @Input() indice: number;

  
  constructor() { }

  ngOnInit(): void {
  }

  caracteristicas = [""];

  agregarEmpleado(caracteristica: string){
    this.caracteristicas.push(caracteristica);
  }

}
