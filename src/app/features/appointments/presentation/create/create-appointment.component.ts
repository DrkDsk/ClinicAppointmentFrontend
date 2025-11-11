import { Component } from '@angular/core';
import {Step, StepList, Stepper} from 'primeng/stepper';
import {DatePicker} from 'primeng/datepicker';
import {FloatLabel} from 'primeng/floatlabel';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {InputText} from 'primeng/inputtext';

@Component({
  selector: 'app-create-appointment.component',
  imports: [
    Stepper,
    Step,
    StepList,
    DatePicker,
    FloatLabel,
    FormsModule,
    InputText,
    ReactiveFormsModule
  ],
  templateUrl: './create-appointment.component.html',
  styleUrl: './create-appointment.component.css'
})
export class CreateAppointmentComponent {

  appointmentForm : FormGroup = new FormGroup({
    date: new FormControl<Date | null>(null, {
      nonNullable: true,
      validators: [
        Validators.required
      ]
    })
  });

  onSubmit() {

  }

}
