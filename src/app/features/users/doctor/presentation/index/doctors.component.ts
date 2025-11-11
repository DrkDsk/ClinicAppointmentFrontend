import {Component, inject, OnInit} from '@angular/core';
import {LargeButton} from '../../../../../core/shared/presentation/buttons/large-button/large-button';
import {NavigationFacade} from '../../../../../core/facade/navigation.facade';
import {AppPaths} from '../../../../../core/constants/path.constants';
import {Button} from 'primeng/button';
import {Doctor} from '../../domain/entities/doctor';
import {DoctorRepository} from '../../domain/repositories/doctor.repository';
import {DoctorRepositoryImpl} from '../../data/repositories/doctor.repository.impl';
import {debounceTime, distinctUntilChanged, Subject} from 'rxjs';
import {FormsModule} from '@angular/forms';
import {TableComponent} from '../../../../../core/shared/presentation/table/table.component';
import {PaginatorMeta} from '../../../../../core/shared/domain/entities/meta';
import {PaginatorHelper} from '../../../../../core/helpers/PaginatorHelper';

@Component({
  selector: 'app-doctors.component',
  imports: [
    LargeButton,
    Button,
    FormsModule,
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
  paginatorMeta: PaginatorMeta = {
    from: 0,
    to: 0,
    current_page: 1,
    last_page: 0,
    total: 0,
    per_page: 0,
    pages: []
  }

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
  }

  next() {
    const perPage = this.paginatorMeta.per_page;
    const page = this.paginatorMeta.current_page + 1

    this.getDoctorPaginateService(page, perPage);
  }

  prev() {
    const perPage = this.paginatorMeta.per_page;
    const page = this.paginatorMeta.current_page - 1

    this.getDoctorPaginateService(page, perPage);
  }

  reset() {
    this.paginatorMeta = {
      ...this.paginatorMeta,
      from: 0,
      total: 0,
      per_page: 0
    };
    this.getDoctorPaginateService()
  }

  isLastPage(): boolean {
    return this.paginatorMeta.current_page === this.paginatorMeta.last_page;
  }

  isFirstPage(): boolean {
    return this.paginatorMeta.current_page === 1;
  }

  loadDoctors(page: number) {
    this.getDoctorPaginateService(page, this.paginatorMeta.per_page);
  }

  getDoctorPaginateService(page?: number, perPage?: number) {
    this.doctorRepository.getDoctors(page, perPage).subscribe((response) => {
      this.doctors = response.data;
      const responseMeta = response?.meta;
      const current = responseMeta?.current_page ?? 1;
      const last = responseMeta?.last_page ?? 0

      this.paginatorMeta = {
        ...this.paginatorMeta,
        from: responseMeta?.from ?? 0,
        to: responseMeta?.to ?? 0,
        current_page: current,
        last_page: responseMeta?.last_page ?? 0,
        total: responseMeta?.total ?? 0,
        per_page: responseMeta?.per_page ?? 0,
        pages: PaginatorHelper.getVisiblePages(current, last)
      }
    });
  }

  columns = [
    {header: 'Nombre', cell: (d: any) => d.profile.name},
    {header: 'Especialidad', field: 'specialty'},
  ];

  navigateToCreateProfile = () => {
    this.navigationFacade.navigate(AppPaths.createDoctor);
  };
}
