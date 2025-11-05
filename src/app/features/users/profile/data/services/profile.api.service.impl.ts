import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PeopleDataResponseModel} from '../models/people.data.response.model';
import {ProfileApiService} from './profile.api.service';
import {Observable} from 'rxjs';
import {Profile} from '../../domain/entities/profile';
import {UserDataResponseModel} from '../../../../dashboard/domain/entities/user.data.response.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileApiServiceImpl implements ProfileApiService {

  constructor(private httpClient: HttpClient) {
  }

  getProfile(): Observable<UserDataResponseModel> {
    return this.httpClient.get<UserDataResponseModel>("api/auth/get")
  }


  getProfilePaginate(page = 1, perPage = 10) {
    return this.httpClient.get<PeopleDataResponseModel>(`api/people/get?page=${page}&perPage=${perPage}`);
  }

  search(query: string) {
    return this.httpClient.post<PeopleDataResponseModel>("api/people/search", {
      "query": query,
    });
  }
}
