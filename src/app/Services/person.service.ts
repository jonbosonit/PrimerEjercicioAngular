import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Person } from "../Interfaces/person.interface";

@Injectable({
    providedIn: 'root'
})
export class PersonService{
    constructor(private http: HttpClient){}

    getData(): Observable<Person[]> {
        return this.http.get<Person[]>('http://localhost:3000/persons');
    }

    borrarPerson(id: string):Observable<any>{
        return this.http.delete<any>(`http://localhost:3000/persons/${id}`)
    }

    getPersona(id: string):Observable<Person>{
        return this.http.get<Person>(`http://localhost:3000/persons/${id}`)
        
    }

    actualizarPerson(person: Person,person2: Person):Observable<Person>{
        return this.http.put<Person>(`http://localhost:3000/persons/${person.id}`,person2)
    }

    /* crearPerson(person: Person):Observable<Person>{
        return this.http.post<Person>(`http://localhost:3000/persons`,person)
    } */
}