import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { FormsModule } from '@angular/forms';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { MiFormularioComponent } from './directivas/mi-formulario/mi-formulario.component';
import { EmpleadosComponent2 } from './pequeñaPractica/empleados/empleados.component';
import { MiloginComponent } from './ComponentesLogin/milogin/milogin.component';
import { PaginaVentasComponent } from './ventasWalmart/pagina-ventas/pagina-ventas.component';
import { MisEmpleeadosComponent } from './miPracticaEmpleados/mis-empleeados/mis-empleeados.component';
import { ListarEmpleadosComponent } from './pequeñaPractica/empleados/listar-empleados/listar-empleados.component';
import { CaracteristicasEmpleadoComponent } from './pequeñaPractica/empleados/listar-empleados/caracteristicas-empleado/caracteristicas-empleado.component';
import { EjemploPropertieBindingComponent } from './conexionPropiedad/ejemplo-propertie-binding/ejemplo-propertie-binding.component';
import { MiServicioService } from './conexionPropiedad/ejemplo-propertie-binding/mi-servicio.service';
import { FormularioEmpleadoComponent } from './miAppEmpleados/formulario-empleado/formulario-empleado.component';
import { ListaEmpleadosComponent } from './miAppEmpleados/formulario-empleado/lista-empleados/lista-empleados.component';
import { Empleado } from './miAppEmpleados/modelo/Empleado';
import {HttpClientModule} from "@angular/common/http"


@NgModule({
  declarations: [
    AppComponent, 
    EmpleadosComponent, EmpleadoComponent, CalculadoraComponent, MiFormularioComponent, EmpleadosComponent2, MiloginComponent, PaginaVentasComponent, MisEmpleeadosComponent, ListarEmpleadosComponent, CaracteristicasEmpleadoComponent, EjemploPropertieBindingComponent, FormularioEmpleadoComponent, ListaEmpleadosComponent
    
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule
    
  ],
  providers: [MiServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
