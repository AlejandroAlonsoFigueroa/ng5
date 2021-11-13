import { Component } from '@angular/core';
import { MiServicio } from './miServicio';
// Decorador 
@Component({
  //Nombre del selector
  selector: 'app-raiz',
  // Documento HTML donde se carga este componente
  templateUrl: './app.component.html',

  // Documento CSS donde esta la hoja de diseño
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    
      miObjeto: any;
      constructor(public json: MiServicio){

        this.json.getJson("https://swapi.dev/api/people/1").subscribe(respuesta  => (this.miObjeto = respuesta));
          
        

      }

}
