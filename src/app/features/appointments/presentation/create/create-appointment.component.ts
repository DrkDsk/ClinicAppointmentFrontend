import {Component, inject, OnInit} from '@angular/core';
import {DatePicker} from 'primeng/datepicker';
import {FloatLabel} from 'primeng/floatlabel';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {DoctorRepository} from '../../../users/doctor/domain/repositories/doctor.repository';
import {DoctorRepositoryImpl} from '../../../users/doctor/data/repositories/doctor.repository.impl';
import {Doctor} from '../../../users/doctor/domain/entities/doctor';
import {PaginatorMeta} from '../../../../core/shared/domain/entities/meta';
import {PaginatorHelper} from '../../../../core/helpers/PaginatorHelper';
import {PaginatorComponent} from '../../../../core/shared/presentation/paginator/paginator.component';
import {MediumBotton} from '../../../../core/shared/presentation/buttons/medium-botton/medium-botton';
import {PrimeTemplate} from 'primeng/api';
import {Step, StepList, StepPanel, StepPanels, Stepper} from 'primeng/stepper';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-create-appointment.component',
  imports: [
    DatePicker,
    FloatLabel,
    ReactiveFormsModule,
    PaginatorComponent,
    MediumBotton,
    PrimeTemplate,
    Step,
    StepList,
    StepPanel,
    StepPanels,
    Stepper,
    NgClass,
  ],
  templateUrl: './create-appointment.component.html',
  styleUrl: './create-appointment.component.css'
})
export class CreateAppointmentComponent implements OnInit{

  private doctorRepository : DoctorRepository = inject(DoctorRepositoryImpl)

  doctors: Doctor[] = [];
  selectedDoctorId: String | null = null;
  paginatorMeta: PaginatorMeta = {
    from: 0,
    to: 0,
    current_page: 1,
    last_page: 0,
    total: 0,
    per_page: 6,
    pages: []
  }

  doctorForm = new FormGroup({
    doctorId: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    })
  });

  appointmentForm : FormGroup = new FormGroup({
    doctorForm: this.doctorForm,
    date: new FormControl<Date | null>(null, {
      nonNullable: true,
      validators: [Validators.required]
    }),
  });

  setDoctorId(doctor: Doctor) {
    const doctorId = doctor.id.toString();
    this.doctorForm.setValue({
      doctorId: doctorId
    })
    this.selectedDoctorId = doctorId
  }

  ngOnInit(): void {
      this.getDoctorPaginateService(this.paginatorMeta.current_page, this.paginatorMeta.per_page)
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

  getAvailableAppointments(date: Date) {
    const doctorId = this.selectedDoctorId;
    const dateFormatted = date.toISOString().split('T')[0];

    console.log({
      doctorId,
      dateFormatted
    })
  }

  onSubmit() {

  }

}
