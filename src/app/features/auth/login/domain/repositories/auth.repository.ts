import {Observable} from "rxjs";
import {LoginCredentials} from "../entities/credential";
import {LoginResponseModel} from '../../data/models/login.response.model';

export interface AuthRepository {
  login(credentials: LoginCredentials): Observable<LoginResponseModel>;

  isAuthenticated(): Observable<boolean>;
}
