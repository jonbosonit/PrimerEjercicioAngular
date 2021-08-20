import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../Interfaces/person.interface';
import { PersonService } from '../Services/person.service';
import {switchMap} from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  
  @Input() person!: Person;

  miFormulario:FormGroup = this.fb.group({
    user: ['',[Validators.required,Validators.minLength(6),Validators.maxLength(10)]],
    surname: ['',[Validators.required]],
    company_email: ['',[Validators.required]],
    personal_email: ['',[Validators.required]],
    city: ['',[Validators.required]],
    imagen_url: ['',[Validators.required]],
    created_date: [new Date(),[Validators.required]],
    active: [false,[Validators.required]],
    finish_date: [new Date(),[]]
  })

  constructor(private personService: PersonService,
              private route: ActivatedRoute,
              private fb: FormBuilder,
              private router: Router){}

  ngOnInit(): void {
    this.miFormulario.reset(this.person)
    console.log(this.miFormulario);
    if(!this.router.url.includes('editar')){
      return;
    }
    this.route.params.pipe(switchMap(({id})=> this.personService.getPersona(id)))
    .subscribe(person => {
      this.person = person;
      this.miFormulario.patchValue(this.person)
      console.log(this.person)
    })
  }


  guardar(){
    if(this.miFormulario.invalid){
      console.log('Formulario no valido')
      return;
    }
    else if(this.person.id){
      console.log(this.miFormulario.value)
      this.personService.actualizarPerson(this.person,this.miFormulario.value)
      .subscribe(person => {
        this.router.navigate(['/lista_persona']);
      })
    }
  }

  /* crearPerson(){
    this.personService.crearPerson(this.miFormulario.value).subscribe(
      person => {
        this.router.navigate(['/lista_persona'])
      }
    )
  } */

  borrarPerson(){
    this.personService.borrarPerson(this.person.id!)
    .subscribe(resp => this.router.navigate(['/lista_persona']));
  }

}


