import { Component, OnInit } from '@angular/core';
import { MiServicioService } from './mi-servicio.service';

@Component({
  selector: 'app-ejemplo-propertie-binding',
  templateUrl: './ejemplo-propertie-binding.component.html',
  styleUrls: ['./ejemplo-propertie-binding.component.css']
})
export class EjemploPropertieBindingComponent implements OnInit {

  constructor(private miServicio: MiServicioService) {}

  ngOnInit(): void {
  }




  nombre: string = "Alejandro";
  apellido: string = "Alonso";
  edad: number = 20;

  textoDeRegistro = "No hay nadie registrado";
  //empresa: string = "MiEmpresa";
  campoEmpresa = "Mi empresa";
  /*escribirEmpresa(){
    
  }*/

  cambiaEmpresa(miEvento: Event){
    this.campoEmpresa = (<HTMLInputElement>miEvento.target).value;
  }
  cuadroHabilitado = true;

  mostrarEmpresa(value: string){

  }

  cambiarValorCampo(){
    this.cuadroHabilitado= !this.cuadroHabilitado;
  }

  mostrarVentanaEmergente(miEvento: Event){
    //alert("Mostrando ventana emergente");

    this.miServicio.mostrarVentanaEmergente("El usuario sera registrado");
    if((<HTMLInputElement>miEvento.target).value == "Sí"){
      this.textoDeRegistro= "El usuario se acaba de registrar";

    }else{
      this.textoDeRegistro= "El usuario se des registro";
    }
   
  }




}
