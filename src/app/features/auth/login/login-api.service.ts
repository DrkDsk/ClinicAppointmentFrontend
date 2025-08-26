import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginCredentials } from './interfaces/credential';
import { Observable } from 'rxjs';
import { Token } from './interfaces/token';

@Injectable({
  providedIn: 'root'
})
export class LoginApiService {

  constructor(private httpClient: HttpClient) { }

  login(credentials: LoginCredentials): Observable<Token> {
    credentials.device = "samsung"
    return this.httpClient.post<Token>('api/auth/login', credentials)
  }

}
