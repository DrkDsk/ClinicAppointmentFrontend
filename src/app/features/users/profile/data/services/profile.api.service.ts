import {PeopleDataResponseModel} from '../models/people.data.response.model';
import {Observable} from 'rxjs';
import {Profile} from '../../domain/entities/profile';
import {UserDataResponseModel} from '../../../../dashboard/domain/entities/user.data.response.model';

export interface ProfileApiService {
  getProfile(): Observable<UserDataResponseModel>

  getProfilePaginate(page: number, perPage: number): Observable<PeopleDataResponseModel>

  search(query: string): Observable<PeopleDataResponseModel>
}
