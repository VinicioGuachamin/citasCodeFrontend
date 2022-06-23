import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BuscarComponent } from './buscar/buscar.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { CrearCitaComponent } from './crear-cita/crear-cita.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  { path: 'home', component: BuscarComponent },
  { path: 'crear', component: CrearCitaComponent },
   { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    BuscarComponent,
    CrearCitaComponent
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule, RouterModule.forRoot(routes)],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
