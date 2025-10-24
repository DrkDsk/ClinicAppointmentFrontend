import {Injectable} from '@angular/core';
import {DoctorRepository} from '../../domain/repositories/doctor.repository';
import {Observable} from "rxjs";
import {HttpClient} from '@angular/common/http';
import {SpecialtyResponseModel} from '../models/specialties.response.model';
import {DoctorsResponseModel} from "../models/doctors.response.model";

@Injectable({
  providedIn: 'root'
})

export class DoctorRepositoryImpl implements DoctorRepository {

  constructor(private httpClient: HttpClient) {
  }

  getDoctors(page: number = 1, perPage: number = 10): Observable<DoctorsResponseModel> {
    return this.httpClient.get<DoctorsResponseModel>(`api/doctors/get?page=${page}&perPage=${perPage}`);
  }

  getSpecialties(): Observable<SpecialtyResponseModel> {
    return this.httpClient.get<SpecialtyResponseModel>("api/doctors/specialties")
  }
}
