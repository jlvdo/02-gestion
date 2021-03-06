import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';
import { HomeComponent } from './home/home.component';
//Modulos de la aplicacion
import { ClientesModule } from './clientes/clientes.module';
import { TemarioModule } from './temario/temario.module';
import { PipesModule } from './pipes/pipes.module';
import { PaisesModule } from './paises/paises.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClientesModule,
    TemarioModule,
    PipesModule,
    PaisesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
