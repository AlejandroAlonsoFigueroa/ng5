import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mi-formulario',
  templateUrl: './mi-formulario.component.html',
  styleUrls: ['./mi-formulario.component.css']
})
export class MiFormularioComponent implements OnInit {



  ngOnInit(): void {
  }


  titulo = "Formulario";
  mensaje = "";
  registrado = false;
  nombre = "";
  apellido = "";
  //entradas: object[];
  entradas :Array<any>;

  constructor() { 
    this.entradas = [
    {tit: "Python, cada dia más presente"},
    {tit: "Top 10 lenguajes de programación mejor pagados"},
    {tit: "Implementación de sockets en java"},
    {tit: "Estructuras de datos en lenguaje C"},
    {tit: "¿Realmente vale la pena aprender programación?"},
    

  ]


  }




  registrarUsuario(){

    this.registrado = true;
    this.mensaje = "Usuario registrado con éxito";
  }

}
