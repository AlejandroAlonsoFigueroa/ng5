import { Component } from '@angular/core';

// Decorador 
@Component({
  //Nombre del selector
  selector: 'app-calculadora',
  // Documento HTML donde se carga este componente
  templateUrl: './calculadora.component.html',

  // Documento CSS donde esta la hoja de diseño
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  title = 'Mi Calculadora';


  n1: number = 0;
  n2: number = 0;
  resultado: number = 0;

  saludo = "¡Hola mundo!"

  sumar():void{

    this.resultado = (this.n1 + this.n2);

  }
  restar():void{

    this.resultado = (this.n1 - this.n2);

  }
  multiplicar():void{

    this.resultado = (this.n1 * this.n2);

  }
  dividir():void{

    this.resultado = (this.n1 / this.n2);

  }

}
