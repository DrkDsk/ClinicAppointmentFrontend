import {map, Observable} from "rxjs";
import {LoginCredentials} from "../../domain/entities/credential";
import {AuthRepository} from "../../domain/repositories/auth.repository";
import {Inject, Injectable} from "@angular/core";
import {AuthApiService} from "../services/auth_api.service";
import {LoginResponseModel} from '../models/login.response.model';
import {AUTH_API_SERVICE} from '../services/auth_api.service.injection.token';

@Injectable({
  providedIn: 'root'
})

export class AuthRepositoryImpl implements AuthRepository {

  constructor(@Inject(AUTH_API_SERVICE) private authApiService: AuthApiService) {
  }

  login(credentials: LoginCredentials): Observable<LoginResponseModel> {
    const request = this.authApiService.login(credentials);

    return request.pipe(
      map(response => response)
    );
  }
}
