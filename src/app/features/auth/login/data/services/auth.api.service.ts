import {Observable} from "rxjs";
import {LoginCredentials} from "../../domain/entities/credential";
import {LoginResponseModel} from "../models/login.response.model";

export interface AuthApiService {
  login(credentials: LoginCredentials): Observable<LoginResponseModel>;

  logout(): Observable<any>;
}
