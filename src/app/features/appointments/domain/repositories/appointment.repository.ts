import {Observable} from 'rxjs';
import {AvailableAppointmentsResponseModel} from '../../data/models/available.appoinments.response.model';

export interface AppointmentRepository {
  getAvailableDates(doctor: string, date: string): Observable<AvailableAppointmentsResponseModel>
}
