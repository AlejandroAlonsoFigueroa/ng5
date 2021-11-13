import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MiServicioService {

  constructor() { }


  mostrarVentanaEmergente(mensaje: string){
    alert(mensaje);
  }
}
