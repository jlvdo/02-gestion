import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { ClientesDetalleComponent } from './pages/clientes-detalle/clientes-detalle.component';


@NgModule({
  declarations: [
    ClientesComponent,
    ClientesDetalleComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule
  ]
})
export class ClientesModule { }
