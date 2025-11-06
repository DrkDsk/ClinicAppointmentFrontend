import {Component, inject, OnInit} from '@angular/core';
import {CreateButton} from '../../core/shared/presentation/buttons/create-button/create-button';
import {NavigationFacade} from '../../core/facade/navigation.facade';
import {AppPaths} from '../../core/constants/path.constants';
import {Button} from 'primeng/button';
import {Doctor} from '../users/doctor/domain/entities/doctor';
import {DoctorRepository} from '../users/doctor/domain/repositories/doctor.repository';
import {DoctorRepositoryImpl} from '../users/doctor/data/repositories/doctor.repository.impl';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {debounceTime, distinctUntilChanged, Subject} from 'rxjs';
import {TableModule} from 'primeng/table';
import {PaginatorComponent} from '../../core/shared/presentation/paginator/paginator.component';
import {TableComponent} from '../../core/shared/presentation/table/table.component';

@Component({
  selector: 'app-doctors.component',
  imports: [
    CreateButton,
    Button,
    FormsModule,
    TableModule,
    ReactiveFormsModule,
    PaginatorComponent,
    TableComponent
  ],
  templateUrl: './doctors.component.html',
  styleUrl: './doctors.component.css'
})
export class DoctorsComponent implements OnInit {

  private doctorRepository: DoctorRepository = inject(DoctorRepositoryImpl)
  private navigationFacade: NavigationFacade = inject(NavigationFacade)

  doctors: Doctor[] = [];
  originalDoctors: Doctor[] = [];
  doctorQuery = ""
  private searchSubject = new Subject<string>();

  from: number = 0;
  to: number = 0;
  listOfPages: number[] = [];
  perPage = 10;
  totalRecords = 0;
  currentPage = 0;
  lastPage: number = 0;

  ngOnInit(): void {
    this.searchSubject
      .pipe(
        debounceTime(600),
        distinctUntilChanged()
      )
      .subscribe((valor) => {
        this.callToSearchDoctor(valor)
      });

    this.getDoctorPaginateService()
  }

  onQueryChange(value: string) {
    this.searchSubject.next(value);
  }

  callToSearchDoctor(query: string) {
    if (!query.length) {
      this.getDoctorPaginateService()
      return;
    }

    if (this.originalDoctors.length === 0) {
      this.originalDoctors = [...this.doctors];
    }

    /*this.peopleService.search(query).subscribe((response) => {
      this.doctors = response.data
      this.enablePagination = false
    })*/
  }

  next() {
    const perPage = this.perPage;
    const page = this.currentPage + 1

    this.getDoctorPaginateService(page, perPage);
  }

  prev() {
    const perPage = this.perPage;
    const page = this.currentPage - 1

    this.getDoctorPaginateService(page, perPage);
  }

  reset() {
    this.from = 0;
    this.perPage = 10;
    this.totalRecords = 0;
    this.getDoctorPaginateService()
  }

  isLastPage(): boolean {
    return this.currentPage === this.lastPage;
  }

  isFirstPage(): boolean {
    return this.currentPage === 1;
  }

  loadDoctors(page: number) {
    this.getDoctorPaginateService(page, this.perPage);
  }

  getDoctorPaginateService(page?: number, perPage?: number) {
    this.doctorRepository.getDoctors(page, perPage).subscribe((response) => {
      this.from = response.meta?.from ?? 0;
      this.to = response.meta?.to ?? 0

      this.currentPage = response.meta?.current_page ?? 1;
      this.lastPage = response.meta?.last_page ?? 0;

      this.listOfPages = this.getVisiblePages(this.currentPage, this.lastPage)

      this.doctors = response.data;
      this.totalRecords = response.meta?.total ?? 0;
    });
  }

  getVisiblePages(currentPage: number, totalPages: number, maxVisible: number = 8): number[] {
    const half = Math.floor(maxVisible / 2);

    let start = Math.max(currentPage - half, 1);
    let end = start + maxVisible - 1;

    if (end > totalPages) {
      end = totalPages;
      start = Math.max(end - maxVisible + 1, 1);
    }

    return Array.from({length: end - start + 1}, (_, i) => start + i);
  }

  columns = [
    {header: 'Nombre', cell: (d: any) => d.profile.name},
    {header: 'Especialidad', field: 'specialty'},
  ];

  navigateToCreateProfile = () => {
    this.navigationFacade.navigate(AppPaths.createDoctor);
  };
}
