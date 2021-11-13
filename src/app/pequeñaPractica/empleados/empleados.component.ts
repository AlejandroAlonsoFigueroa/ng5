import { Component, OnInit } from '@angular/core';
import { Empleado } from './empleados.model';

@Component({
  selector: 'app-empleados2',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent2 implements OnInit {

  constructor() {

    this.empleados ;
   }

  ngOnInit(): void {
  }


  empleados: Empleado[]  = [

    new Empleado("Alejandro", "Alonso", "Programador", 10000), 
    new Empleado("Mareclo", "Peréz", "Diseñador", 7000), 
    new Empleado("Laura", "Guevara", "Administrador", 15000), 
    new Empleado("Mariana", "Salazar", "Programador", 10000), 
  ];



  agregarEmpleado(){
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);

    this.empleados.push(miEmpleado);
  }


  titulo = "Formulario empleados"
  cuadroNombre: string = "";
  cuadroApellido: string = "";
  cuadroCargo: string = "";
  cuadroSalario: number= 0;

}
