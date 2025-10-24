import {Observable} from 'rxjs';
import {SpecialtyResponseModel} from '../../data/models/specialties.response.model';
import {DoctorsResponseModel} from '../../data/models/doctors.response.model';

export interface DoctorRepository {
  getDoctors(page: number | null | undefined, perPage: number | null | undefined): Observable<DoctorsResponseModel>;

  getSpecialties(): Observable<SpecialtyResponseModel>;
}
