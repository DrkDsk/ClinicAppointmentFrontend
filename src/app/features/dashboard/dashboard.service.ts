import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDataResponse } from './domain/entities/user.data.response';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private httpClient: HttpClient) { }

  getUser(): Observable<UserDataResponse> {
    return this.httpClient.get<UserDataResponse>("api/users/get")
  }
}
