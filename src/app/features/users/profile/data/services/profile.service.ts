import {PeopleDataResponseModel} from '../models/people.data.response.model';
import {Observable} from 'rxjs';

export interface ProfileService {
  getAppointments(page: number, perPage: number): Observable<PeopleDataResponseModel>

  search(query: string): Observable<PeopleDataResponseModel>
}
