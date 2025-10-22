import {Component, OnInit} from '@angular/core';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {Person} from '../../dashboard/domain/entities/person';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-people-component',
  imports: [
    TableModule, ButtonModule, FormsModule
  ],
  templateUrl: './people-component.html',
  styleUrl: './people-component.css'
})
export class PeopleComponent implements OnInit {
  customers!: Person[];

  ngOnInit(): void {
      this.customers = [
        {
          name : "Alfredo",
          email: "joseaph.1998@gmail.com",
          birthday: "2025-10-12",
          phone: "9611427582",
          id: "1"
        }
      ]
  }

  first = 0;
  rows = 11;

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
    return this.customers ? this.first + this.rows >= this.customers.length : true;
  }

  isFirstPage(): boolean {
    return this.customers ? this.first === 0 : true;
  }

}
