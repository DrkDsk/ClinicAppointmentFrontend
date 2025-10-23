import {map, Observable} from "rxjs";
import {LoginCredentials} from "../../domain/entities/credential";
import {AuthRepository} from "../../domain/repositories/auth.repository";
import {Inject, Injectable} from "@angular/core";
import {AuthApiService} from "../services/auth_api.service";
import {AUTH_API_SERVICE} from "../services/auth_api.service.injection.token";
import {LoginResponseModel} from '../models/login.response.model';

@Injectable({
  providedIn: 'root'
})

export class AuthRepositoryImpl implements AuthRepository {

  constructor(@Inject(AUTH_API_SERVICE) private authApiService: AuthApiService) {
  }

  isAuthenticated(): Observable<boolean> {
    const request = this.authApiService.getAuthentication();

    return request.pipe(
      map(response => response.data != null),
    )
  }

  login(credentials: LoginCredentials): Observable<LoginResponseModel> {
    const request = this.authApiService.login(credentials);

    return request.pipe(
      map(response => response)
    );
  }
}
