import {Inject, Injectable} from '@angular/core';
import {DoctorRepository} from '../../domain/repositories/doctor.repository';
import {map, Observable} from "rxjs";
import {SpecialtyResponseModel} from '../models/specialties.response.model';
import {DoctorsResponseModel} from "../models/doctors.response.model";
import {DoctorService} from '../services/doctor.service';
import {DOCTOR_SERVICE_INJECTION_TOKEN} from '../services/doctor.service.injection.token';

@Injectable({
  providedIn: 'root'
})

export class DoctorRepositoryImpl implements DoctorRepository {

  constructor(@Inject(DOCTOR_SERVICE_INJECTION_TOKEN) private doctorService: DoctorService) {
  }


  getDoctors(page: number = 1, perPage: number = 10): Observable<DoctorsResponseModel> {
    page = page ?? 1;
    perPage = perPage ?? 10;

    const request = this.doctorService.getDoctors(page, perPage);

    return request.pipe(
      map(response => response),
    )
  }

  getSpecialties(): Observable<SpecialtyResponseModel> {
    const request = this.doctorService.getSpecialties();

    return request.pipe(
      map(response => response),
    )
  }
}
