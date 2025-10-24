import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PeopleDataResponseModel} from '../models/people.data.response.model';
import {ProfileService} from './profile.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileServiceImpl implements ProfileService {

  constructor(private httpClient: HttpClient) {
  }

  getAppointments(page = 1, perPage = 10) {
    return this.httpClient.get<PeopleDataResponseModel>(`api/people/get?page=${page}&perPage=${perPage}`);
  }

  search(query: string) {
    return this.httpClient.post<PeopleDataResponseModel>("api/people/search", {
      "query": query,
    });
  }
}
