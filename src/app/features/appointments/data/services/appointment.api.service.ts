import {Observable} from 'rxjs';
import {AvailableAppointmentsResponseModel} from '../models/available.appoinments.response.model';

export interface AppointmentApiService {
  getAvailableDates(doctor: string, date: string): Observable<AvailableAppointmentsResponseModel>
}
