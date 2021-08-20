import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from '../Interfaces/person.interface';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.css']
})
export class PersonCardComponent implements OnInit {

  constructor(){

  }

  ngOnInit(): void{

  }

  @Output() enviar: EventEmitter<string> = new EventEmitter<string>();

  @Input() person!: Person;

  borrarPerson(){
    this.enviar.emit(this.person.id)
  }

}
