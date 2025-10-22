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
  perPage = 10;
  totalRecords = 0;

  ngOnInit(): void {
    this.callToService()
  }

  next() {
    const perPage = this.perPage;
    this.first = this.first + perPage;
    const page = this.first / perPage + 1;

    this.callToService(page, perPage);
  }

  prev() {
    const perPage = this.perPage;
    this.first = this.first - perPage;
    const page = this.first / perPage + 1;

    this.callToService(page, perPage);
  }

  reset() {
    this.first = 0;
    this.perPage = 10;
    this.totalRecords = 0;
    this.callToService()
  }

  isLastPage(): boolean {
    return this.people ? this.first + this.perPage >= this.totalRecords : true;
  }

  isFirstPage(): boolean {
    return this.people ? this.first === 0 : true;
  }

  loadPeople(event: any) {
    const first = event.first;
    const perPage = event.rows;
    this.perPage = perPage;
    this.first = first
    const page = first / perPage + 1;

    this.callToService(page, perPage);
  }

  callToService(page?: number, perPage?: number) {
    this.peopleService.getAppointments(page, perPage).subscribe((response) => {
      this.people = response.data;
      this.totalRecords = response.meta.total;
    });
  }
}
