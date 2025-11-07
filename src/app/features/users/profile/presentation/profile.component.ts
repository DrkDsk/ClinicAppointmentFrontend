import {Component, inject, OnInit} from '@angular/core';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {FormsModule} from '@angular/forms';
import {FloatLabel} from 'primeng/floatlabel';
import {InputText} from 'primeng/inputtext';
import {debounceTime, distinctUntilChanged, Subject} from 'rxjs';
import {Profile} from '../domain/entities/profile';
import {ProfileRepository} from '../domain/repositories/profile.repository';
import {ProfileRepositoryImpl} from '../data/repositories/profile.repository.impl';
import {TableComponent} from '../../../../core/shared/presentation/table/table.component';
import {PaginatorMeta} from '../../../../core/shared/domain/entities/meta';
import {PaginatorHelper} from '../../../../core/helpers/PaginatorHelper';

@Component({
  selector: 'app-people-component',
  imports: [
    TableModule, ButtonModule, FormsModule, FloatLabel, InputText, TableComponent
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

  private profileRepository: ProfileRepository = inject(ProfileRepositoryImpl)

  people: Profile[] = [];
  originalPeople: Profile[] = [];
  paginatorMeta: PaginatorMeta = {
    from: 0,
    to: 0,
    current_page: 1,
    last_page: 0,
    total: 0,
    per_page: 0,
    pages: []
  }

  enablePagination = true;
  peopleQuery = ""
  private searchSubject = new Subject<string>();

  columns = [
    {header: 'Nombre', field: 'name'},
    {header: 'Correo electrónico', field: 'email'},
    {header: 'Teléfono', field: 'phone'},
  ];

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
    const perPage = this.paginatorMeta.per_page;
    const page = this.paginatorMeta.current_page + 1

    this.getProfilePaginateService(page, perPage);
  }

  prev() {
    const perPage = this.paginatorMeta.per_page;
    const page = this.paginatorMeta.current_page - 1

    this.getProfilePaginateService(page, perPage);
  }

  reset() {
    this.paginatorMeta = {
      ...this.paginatorMeta,
      from: 0,
      total: 0,
      per_page: 0
    };
    this.getProfilePaginateService()
  }

  isLastPage(): boolean {
    return this.paginatorMeta.current_page === this.paginatorMeta.last_page;
  }

  isFirstPage(): boolean {
    return this.paginatorMeta.current_page === 1;
  }

  loadProfiles(page: number) {
    this.getProfilePaginateService(page, this.paginatorMeta.per_page);
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

  getProfilePaginateService(page?: number, perPage?: number) {
    this.profileRepository.getProfilesPaginate(page, perPage).subscribe((response) => {
      this.people = response.data;

      this.paginatorMeta = {
        ...this.paginatorMeta,
        ...PaginatorHelper.mapResponseToMeta(response)
      }
    });
  }
}
