import {catchError, map, Observable, throwError} from "rxjs";
import {LoginCredentials} from "../../domain/entities/credential";
import {AuthRepository} from "../../domain/repositories/auth.repository";
import {inject, Inject, Injectable} from "@angular/core";
import {AuthApiService} from "../services/auth.api.service";
import {LoginResponseModel} from '../models/login.response.model';
import {AuthApiServiceImpl} from '../services/auth.api.service.impl';

@Injectable({
  providedIn: 'root'
})

export class AuthRepositoryImpl implements AuthRepository {

  private authApiService: AuthApiService = inject(AuthApiServiceImpl);

  login(credentials: LoginCredentials): Observable<LoginResponseModel> {
    const request = this.authApiService.login(credentials);

    return request.pipe(
      map(response => response),
      catchError((err, caught) => {

        console.log({
          error: err
        })

        return throwError(() => err);

      })
    );
  }
}
