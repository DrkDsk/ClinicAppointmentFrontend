import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {LoginCredentials} from '../../domain/entities/credential';
import {LoginResponseModel} from '../models/login.response.model';
import {AuthApiService} from './auth.api.service';

@Injectable({
  providedIn: 'root'
})

export class AuthApiServiceImpl implements AuthApiService {

  constructor(private httpClient: HttpClient) {
  }

  login(credentials: LoginCredentials): Observable<LoginResponseModel> {
    credentials.device = "samsung"
    return this.httpClient.post<LoginResponseModel>('api/auth/login', credentials)
  }
}
