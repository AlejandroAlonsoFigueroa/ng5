import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  //template:"<p>Aquí iría un empleado</p>", 
  styleUrls: ['./empleado.component.css']
  
})
export class EmpleadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  propiedadConectada  = "Alejandro Alonso Figueroa";
  nombre = "Alejandro"

  apellido = "Alonso"

  textoDeRegistro = "No esta registrado"
  apellidoMaterno = "Figueroa"

  edad = 10;


  empresa = "Google";
  habilitacionCuadro = false;
  

  usuRegistrado  = false;
  llamarEmpresa(value: String){

  }

  getRegistro(){
    this.usuRegistrado = false;
  }


  setUusuarioRegistrado(event: Event){

    //alert (event.target)

    if((<HTMLInputElement>event.target).value == "si"){
      this.textoDeRegistro = "Se ha registrado alguien"
    }else{
      this.textoDeRegistro = "Se ha des-registrado alguien"
    }
    
  }

 /* cambiarEmpresa(event: Event){
    this.empresa = (<HTMLInputElement>event.target).value;

  }*/


  /*getEdad(){
    return this.edad;
  }*/

}
