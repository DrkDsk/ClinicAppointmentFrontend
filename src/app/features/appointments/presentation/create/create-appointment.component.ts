import { Component } from '@angular/core';
import {DatePicker} from 'primeng/datepicker';
import {FloatLabel} from 'primeng/floatlabel';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-appointment.component',
  imports: [
    DatePicker,
    FloatLabel,
    FormsModule,
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
