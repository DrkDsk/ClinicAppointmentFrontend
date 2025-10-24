import {Observable} from "rxjs";
import {DoctorsResponseModel} from "../models/doctors.response.model";
import {SpecialtyResponseModel} from "../models/specialties.response.model";
import {DoctorApiService} from './doctor.api.service';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DoctorApiServiceImpl implements DoctorApiService {

  constructor(private httpClient: HttpClient) {
  }

  getDoctors(page: number | null | undefined, perPage: number | null | undefined): Observable<DoctorsResponseModel> {
    return this.httpClient.get<DoctorsResponseModel>(`api/doctors/get?page=${page}&perPage=${perPage}`);
  }

  getSpecialties(): Observable<SpecialtyResponseModel> {
    return this.httpClient.get<SpecialtyResponseModel>("api/doctors/specialties")
  }

}
