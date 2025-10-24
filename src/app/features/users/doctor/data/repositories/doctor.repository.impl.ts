import {Injectable} from '@angular/core';
import {DoctorRepository} from '../../domain/repositories/doctor.repository';
import {Observable} from "rxjs";
import {HttpClient} from '@angular/common/http';
import {SpecialtyResponseModel} from '../models/specialties.response.model';

@Injectable({
  providedIn: 'root'
})

export class DoctorRepositoryImpl implements DoctorRepository {

  constructor(private httpClient: HttpClient) {
  }

  getSpecialties(): Observable<SpecialtyResponseModel> {
    return this.httpClient.get<SpecialtyResponseModel>("api/doctors/specialties")
  }
}
