import { Component, OnInit } from '@angular/core';
import { PersonService} from '../Services/person.service';
import { Person } from '../Interfaces/person.interface';

@Component({
  selector: 'app-lista-persona',
  templateUrl: './lista-persona.component.html',
  styleUrls: ['./lista-persona.component.css'
  ]
})
export class ListaPersonaComponent implements OnInit{
  persons: Person[] = [];
  

  constructor(private personService: PersonService){}

  ngOnInit(): void{
    this.personService.getData().subscribe(persons => this.persons = persons);
  }

  recibirMensaje(id:string){
    this.personService.borrarPerson(id).subscribe(person => 
      this.persons.filter(p => p.id!=id))
  }

}





