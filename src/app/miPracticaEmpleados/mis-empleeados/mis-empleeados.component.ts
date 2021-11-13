import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/pequeñaPractica/empleados/empleados.model';

@Component({
  selector: 'app-mis-empleeados',
  templateUrl: './mis-empleeados.component.html',
  styleUrls: ['./mis-empleeados.component.css']
})
export class MisEmpleeadosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  titulo = "MisEmpleados"
  empleados: Empleado[] = [

    new Empleado("Alejandro", "Alonso", "Programador", 10000),
    new Empleado("Jose", "Peréz", "Programador", 10000),
    new Empleado("Pedro", "Martinéz", "Programador", 10000),
    new Empleado("Maria", "Saavedra", "Programador", 10000),
  ];

}
