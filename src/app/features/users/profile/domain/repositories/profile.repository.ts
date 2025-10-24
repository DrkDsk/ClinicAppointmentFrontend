import {PeopleDataResponseModel} from '../../data/models/people.data.response.model';
import {Observable} from 'rxjs';

export interface ProfileRepository {
  getProfilePaginate(page: number | null | undefined, perPage: number | null | undefined): Observable<PeopleDataResponseModel>;

  search(query: string): Observable<PeopleDataResponseModel>;
}
