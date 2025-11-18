import {AppointmentApiService} from './appointment.api.service';
import {Observable} from 'rxjs';
import {AvailableAppointmentsResponseModel} from '../models/available.appoinments.response.model';
import {HttpClient} from '@angular/common/http';
import {inject, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppointmentApiServiceImpl implements AppointmentApiService{

  private httpClient : HttpClient = inject(HttpClient)

  getAvailableDates(doctor: string, date: string): Observable<AvailableAppointmentsResponseModel> {
    return this.httpClient.get<AvailableAppointmentsResponseModel>(`api/doctors/${doctor}/available-times`, {
      params : {
        date
      }
    });
  }
}
