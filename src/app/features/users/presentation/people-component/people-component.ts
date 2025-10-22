import {Component, OnInit} from '@angular/core';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {FormsModule} from '@angular/forms';
import {PeopleService} from '../../data/services/people.service';
import {Person} from '../../domain/appointments.data.response';

@Component({
  selector: 'app-people-component',
  imports: [
    TableModule, ButtonModule, FormsModule
  ],
  templateUrl: './people-component.html',
  styleUrl: './people-component.css'
})
export class PeopleComponent implements OnInit {

  constructor(private peopleService: PeopleService) {}

  people: Person[] = [];
  first = 0;
  rows = 11;

  ngOnInit(): void {
    this.peopleService.getAppointments().subscribe(appointments => {
      this.people = appointments.data
    })
  }

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.people ? this.first + this.rows >= this.people.length : true;
  }

  isFirstPage(): boolean {
    return this.people ? this.first === 0 : true;
  }

}
