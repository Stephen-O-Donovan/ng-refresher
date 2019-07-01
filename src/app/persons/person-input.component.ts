import { Component } from '@angular/core';
import { PersonsService } from './persons.service';

@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css']
})
export class PersonInputComponent {
  enteredPersonName = '';

  constructor(private PersonsService: PersonsService) {}

  onCreatePerson() {
    alert('Created a person : ' + this.enteredPersonName);
    this.PersonsService.addPerson(this.enteredPersonName);
    this.enteredPersonName = '';
  }

}
