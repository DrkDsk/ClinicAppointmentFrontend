import {map, Observable} from "rxjs";
import {ProfileRepository} from '../../domain/repositories/profile.repository';
import {Inject, Injectable} from '@angular/core';
import {PeopleDataResponseModel} from "../models/people.data.response.model";
import {ProfileApiService} from '../services/profile.api.service';
import {PROFILE_API_SERVICE_TOKEN} from '../services/profile.api.service.injection.token';

@Injectable({
  providedIn: 'root'
})

export class ProfileRepositoryImpl implements ProfileRepository {

  constructor(@Inject(PROFILE_API_SERVICE_TOKEN) private profileApiService: ProfileApiService) {
  }

  getProfilePaginate(page: number | null | undefined, perPage: number | null | undefined): Observable<PeopleDataResponseModel> {
    page = page ?? 1;
    perPage = perPage ?? 10;

    const request = this.profileApiService.getProfilePaginate(page, perPage);

    return request.pipe(
      map(response => response)
    )
  }

  search(query: string): Observable<PeopleDataResponseModel> {
    const request = this.profileApiService.search(query);

    return request.pipe(
      map(response => response)
    )
  }
}
