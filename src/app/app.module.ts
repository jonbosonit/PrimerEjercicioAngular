import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { ListaPersonaComponent } from './lista-persona/lista-persona.component';
import { EditarComponent } from './editar/editar.component';
import { PersonCardComponent } from './person-card/person-card.component';
import { FormsModule } from '@angular/forms'  
import { ReactiveFormsModule} from '@angular/forms' 


@NgModule({
  declarations: [
    AppComponent,
    ListaPersonaComponent,
    EditarComponent,
    PersonCardComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ListaPersonaComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
