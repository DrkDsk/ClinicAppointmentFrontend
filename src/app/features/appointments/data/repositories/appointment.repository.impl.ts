import {AppointmentRepository} from '../../domain/repositories/appointment.repository';
import {map, Observable} from 'rxjs';
import {inject, Injectable} from '@angular/core';
import {AppointmentApiServiceImpl} from '../services/appointment.api.service.impl';
import {AppointmentApiService} from '../services/appointment.api.service';
import {AvailableAppointmentsResponseModel} from '../models/available.appoinments.response.model';

@Injectable({
  providedIn: 'root'
})

export class AppointmentRepositoryImpl implements AppointmentRepository {

  private appointmentApiService : AppointmentApiService = inject(AppointmentApiServiceImpl)

  getAvailableDates(doctor: string, date: string): Observable<AvailableAppointmentsResponseModel> {
    const request = this.appointmentApiService.getAvailableDates(doctor, date);

    return request.pipe(
      map(response => response)
    )
  }
}
