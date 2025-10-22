import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PeopleDataResponse} from '../../domain/people.data.response';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private httpClient: HttpClient) {}

  getAppointments(page: Number = 1) {
    return this.httpClient.get<PeopleDataResponse>(`api/users/people/get?page=${page}`)
  }
}
