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
  rows = 10;
  totalRecords = 0;

  ngOnInit(): void {
    this.peopleService.getAppointments().subscribe(response => {
      this.totalRecords = response.meta.total
      this.people = response.data
    })
  }

  next() {
    this.first = this.first + this.rows;
    const perPage = this.rows;
    const page = this.first / perPage + 1;

    this.callToService(page, perPage);
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.people ? this.first + this.rows >= this.totalRecords : true;
  }

  isFirstPage(): boolean {
    return this.people ? this.first === 0 : true;
  }

  loadPeople(event: any) {
    const first = event.first;
    const rows = event.rows;
    this.rows = rows;
    this.first = first
    const page = first / rows + 1;
    const perPage = event.rows;

    this.callToService(page, perPage);
  }

  callToService(page?: number, perPage?: number) {
    this.peopleService.getAppointments(page, perPage).subscribe((response) => {
      this.people = response.data;
      this.totalRecords = response.meta.total;
    });
  }
}
