import {PeopleDataResponseModel} from '../../data/models/people.data.response.model';
import {Observable} from 'rxjs';
import {User} from '../../../../dashboard/domain/entities/user';

export interface ProfileRepository {
  getProfile(): Observable<User | null>;

  getProfilesPaginate(page: number | null | undefined, perPage: number | null | undefined): Observable<PeopleDataResponseModel>;

  search(query: string): Observable<PeopleDataResponseModel>;
}
