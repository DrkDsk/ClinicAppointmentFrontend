import {Inject, Injectable} from '@angular/core';
import {DoctorRepository} from '../../domain/repositories/doctor.repository';
import {map, Observable} from "rxjs";
import {SpecialtyResponseModel} from '../models/specialties.response.model';
import {DoctorsResponseModel} from "../models/doctors.response.model";
import {DoctorApiService} from '../services/doctor.api.service';
import {DOCTOR_API_SERVICE_INJECTION_TOKEN} from '../services/doctor.api.service.injection.token';

@Injectable({
  providedIn: 'root'
})

export class DoctorRepositoryImpl implements DoctorRepository {

  constructor(@Inject(DOCTOR_API_SERVICE_INJECTION_TOKEN) private doctorApiService: DoctorApiService) {
  }

  getDoctors(page: number = 1, perPage: number = 10): Observable<DoctorsResponseModel> {
    page = page ?? 1;
    perPage = perPage ?? 10;

    const request = this.doctorApiService.getDoctors(page, perPage);

    return request.pipe(
      map(response => response),
    )
  }

  getSpecialties(): Observable<SpecialtyResponseModel> {
    const request = this.doctorApiService.getSpecialties();

    return request.pipe(
      map(response => response),
    )
  }
}
