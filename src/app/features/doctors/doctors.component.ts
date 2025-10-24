import {Component, Inject, OnInit} from '@angular/core';
import {CreateButton} from '../../core/shared/presentation/buttons/create-button/create-button';
import {NavigationFacade} from '../../core/facade/navigation.facade';
import {AppPaths} from '../../core/constants/path.constants';
import {Button} from 'primeng/button';
import {Doctor} from '../users/doctor/domain/entities/doctor';
import {DoctorRepository} from '../users/doctor/domain/repositories/doctor.repository';
import {DOCTOR_REPOSITORY} from '../users/doctor/domain/repositories/doctor.repository.injection.token';
import {DoctorRepositoryImpl} from '../users/doctor/data/repositories/doctor.repository.impl';
import {FloatLabel} from 'primeng/floatlabel';
import {FormsModule} from '@angular/forms';
import {InputText} from 'primeng/inputtext';
import {debounceTime, distinctUntilChanged, Subject} from 'rxjs';
import {PrimeTemplate} from 'primeng/api';
import {TableModule} from 'primeng/table';
import {DOCTOR_API_SERVICE_INJECTION_TOKEN} from '../users/doctor/data/services/doctor.api.service.injection.token';
import {DoctorApiServiceImpl} from '../users/doctor/data/services/doctor.api.service.impl';

@Component({
  selector: 'app-doctors.component',
  imports: [
    CreateButton,
    Button,
    FloatLabel,
    FormsModule,
    InputText,
    PrimeTemplate,
    TableModule
  ],
  providers: [
    {provide: DOCTOR_REPOSITORY, useClass: DoctorRepositoryImpl},
    {provide: DOCTOR_API_SERVICE_INJECTION_TOKEN, useClass: DoctorApiServiceImpl},
  ],
  templateUrl: './doctors.component.html',
  styleUrl: './doctors.component.css'
})
export class DoctorsComponent implements OnInit {

  constructor(
    private navigationFacade: NavigationFacade,
    @Inject(DOCTOR_REPOSITORY) private doctorRepository: DoctorRepository) {
  }

  doctors: Doctor[] = [];
  originalDoctors: Doctor[] = [];
  first = 0;
  perPage = 10;
  totalRecords = 0;
  enablePagination = true;
  doctorQuery = ""
  private searchSubject = new Subject<string>();

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
      this.enablePagination = true;
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
    this.first = this.first + perPage;
    const page = this.first / perPage + 1;

    this.getDoctorPaginateService(page, perPage);
  }

  prev() {
    const perPage = this.perPage;
    this.first = this.first - perPage;
    const page = this.first / perPage + 1;

    this.getDoctorPaginateService(page, perPage);
  }

  reset() {
    this.first = 0;
    this.perPage = 10;
    this.totalRecords = 0;
    this.getDoctorPaginateService()
  }

  isLastPage(): boolean {
    return this.doctors ? this.first + this.perPage >= this.totalRecords : true;
  }

  isFirstPage(): boolean {
    return this.doctors ? this.first === 0 : true;
  }

  loadDoctors(event: any) {
    const first = event.first;
    const perPage = event.rows;
    this.perPage = perPage;
    this.first = first
    const page = first / perPage + 1;

    this.getDoctorPaginateService(page, perPage);
  }

  getDoctorPaginateService(page?: number, perPage?: number) {
    this.doctorRepository.getDoctors(page, perPage).subscribe((response) => {
      this.doctors = response.data;
      this.totalRecords = response.meta?.total ?? 0;
    });
  }

  navigateToCreateProfile = () => {
    this.navigationFacade.navigate(AppPaths.createDoctor);
  };

}
