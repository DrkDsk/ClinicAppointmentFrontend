import {Observable} from 'rxjs';
import {DoctorsResponseModel} from '../models/doctors.response.model';
import {SpecialtyResponseModel} from '../models/specialties.response.model';

export interface DoctorApiService {

  getDoctors(page: number | null | undefined, perPage: number | null | undefined): Observable<DoctorsResponseModel>

  getSpecialties(): Observable<SpecialtyResponseModel>
}
