import {Component, Inject, OnInit} from '@angular/core';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {FormsModule} from '@angular/forms';
import {ProfileApiServiceImpl} from '../data/services/profile.api.service.impl';
import {FloatLabel} from 'primeng/floatlabel';
import {InputText} from 'primeng/inputtext';
import {debounceTime, distinctUntilChanged, Subject} from 'rxjs';
import {Profile} from '../domain/entities/profile';
import {PROFILE_REPOSITORY_TOKEN} from '../domain/repositories/profile.repository.injection.token';
import {ProfileRepositoryImpl} from '../data/repositories/profile.repository.impl';
import {PROFILE_API_SERVICE_TOKEN} from '../data/services/profile.api.service.injection.token';
import {ProfileRepository} from '../domain/repositories/profile.repository';

@Component({
  selector: 'app-people-component',
  imports: [
    TableModule, ButtonModule, FormsModule, FloatLabel, InputText
  ],
  providers: [
    {provide: PROFILE_REPOSITORY_TOKEN, useClass: ProfileRepositoryImpl},
    {provide: PROFILE_API_SERVICE_TOKEN, useClass: ProfileApiServiceImpl}
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

  constructor(@Inject(PROFILE_REPOSITORY_TOKEN) private profileRepository: ProfileRepository) {
  }

  people: Profile[] = [];
  originalPeople: Profile[] = [];
  first = 0;
  perPage = 10;
  totalRecords = 0;
  enablePagination = true;
  peopleQuery = ""
  private searchSubject = new Subject<string>();

  ngOnInit(): void {
    this.searchSubject
      .pipe(
        debounceTime(600),
        distinctUntilChanged()
      )
      .subscribe((valor) => {
        this.callToSearchPeople(valor)
      });

    this.getProfilePaginateService()
  }

  onQueryChange(value: string) {
    this.searchSubject.next(value);
  }

  next() {
    const perPage = this.perPage;
    this.first = this.first + perPage;
    const page = this.first / perPage + 1;

    this.getProfilePaginateService(page, perPage);
  }

  callToSearchPeople(query: string) {
    if (!query.length) {
      this.enablePagination = true;
      this.getProfilePaginateService()
      return;
    }

    if (this.originalPeople.length === 0) {
      this.originalPeople = [...this.people];
    }

    this.profileRepository.search(query).subscribe((response) => {
      this.people = response.data
      this.enablePagination = false
    })
  }

  prev() {
    const perPage = this.perPage;
    this.first = this.first - perPage;
    const page = this.first / perPage + 1;

    this.getProfilePaginateService(page, perPage);
  }

  reset() {
    this.first = 0;
    this.perPage = 10;
    this.totalRecords = 0;
    this.getProfilePaginateService()
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

    this.getProfilePaginateService(page, perPage);
  }

  getProfilePaginateService(page?: number, perPage?: number) {
    this.profileRepository.getProfilePaginate(page, perPage).subscribe((response) => {
      this.people = response.data;
      this.totalRecords = response.meta?.total ?? 0;
    });
  }
}
