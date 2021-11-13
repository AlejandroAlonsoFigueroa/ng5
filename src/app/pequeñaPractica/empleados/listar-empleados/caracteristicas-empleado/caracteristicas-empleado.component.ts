import { Component, EventEmitter, OnInit } from '@angular/core';
import { Output} from '@angular/core';


@Component({
  selector: 'app-caracteristicas-empleado',
  templateUrl: './caracteristicas-empleado.component.html',
  styleUrls: ['./caracteristicas-empleado.component.css']
})
export class CaracteristicasEmpleadoComponent implements OnInit {


  @Output() caracteristicasEmp = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  agregarCaracteristicas(value: string){
      this.caracteristicasEmp.emit(value);
  }

}
