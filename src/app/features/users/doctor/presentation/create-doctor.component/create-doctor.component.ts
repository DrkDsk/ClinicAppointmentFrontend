import {Component, Inject, OnInit} from '@angular/core';
import {Step, StepList, StepPanel, StepPanels, Stepper} from 'primeng/stepper';
import {PrimeTemplate} from 'primeng/api';
import {FloatLabel} from 'primeng/floatlabel';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {InputText} from 'primeng/inputtext';
import {DatePicker} from 'primeng/datepicker';
import {MediumBotton} from '../../../../../core/shared/presentation/buttons/medium-botton/medium-botton';
import {Select} from 'primeng/select';
import {Specialty} from '../../domain/entities/specialty';
import {DOCTOR_REPOSITORY} from '../../domain/repositories/doctor.repository.injection.token';
import {DoctorRepositoryImpl} from '../../data/repositories/doctor.repository.impl';
import {DoctorRepository} from '../../domain/repositories/doctor.repository';

@Component({
  selector: 'app-create-doctor.component',
  imports: [
    StepList,
    Stepper,
    StepPanel,
    PrimeTemplate,
    Step,
    StepPanels,
    FloatLabel,
    FormsModule,
    InputText,
    ReactiveFormsModule,
    DatePicker,
    MediumBotton,
    Select
  ],
  providers: [
    {provide: DOCTOR_REPOSITORY, useClass: DoctorRepositoryImpl},
  ],
  templateUrl: './create-doctor.component.html',
  styleUrl: './create-doctor.component.css'
})
export class CreateDoctorComponent implements OnInit {

  constructor(@Inject(DOCTOR_REPOSITORY) private doctorRepository: DoctorRepository) {
  }

  specialties: Specialty[] = [];

  ngOnInit(): void {
    this.doctorRepository.getSpecialties().subscribe(response => {
        this.specialties = response.data
      }
    )
  }

  profileForm = new FormGroup({
    name: new FormControl<string>('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)
      ]
    }),

    email: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email]
    }),

    birthdate: new FormControl<Date | null>(null, {
      nonNullable: false,
      validators: [Validators.required]
    }),

    phoneNumber: new FormControl<string | null>(null, {
      nonNullable: false,
      validators: [Validators.required, Validators.pattern(/^\d{10}$/)]
    }),
  });

  doctorForm = new FormGroup({
    specialty: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required]
    })
  })

  onSubmit() {
    console.log("submit");
  }

}
