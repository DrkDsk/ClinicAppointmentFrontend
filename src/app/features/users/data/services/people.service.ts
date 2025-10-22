import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PeopleDataResponse} from '../../domain/people.data.response';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private httpClient: HttpClient) {}

  getAppointments(page = 1, perPage = 10) {
    return this.httpClient.get<PeopleDataResponse>(`api/people/get?page=${page}&perPage=${perPage}`);
  }

  search(query: string) {
    return this.httpClient.post<PeopleDataResponse>("api/people/search", {
      "query": query,
    });
  }
}
