import {Observable} from 'rxjs';
import {SpecialtyResponseModel} from '../../data/models/specialties.response.model';

export interface DoctorRepository {
  getSpecialties(): Observable<SpecialtyResponseModel>;
}
