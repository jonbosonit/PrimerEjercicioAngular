import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { ListaPersonaComponent } from './lista-persona/lista-persona.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title='Ejercicio Angular';

  
  
  constructor(private http: HttpClient){}

}
