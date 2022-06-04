import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { ClientesDetalleComponent } from './pages/clientes-detalle/clientes-detalle.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'listado',
        component:ClientesComponent
      },
      {
        path:'vercliente',
        component:ClientesDetalleComponent
      },
      {
        path:'**',
        redirectTo:'listado'
      }
    ]
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
