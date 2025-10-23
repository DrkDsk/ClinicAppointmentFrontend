import { Observable } from "rxjs";
import { LoginCredentials } from "../../domain/entities/credential";
import { LoginResponseModel } from "../models/login.response.model";
import {AuthenticationResponseModel} from '../models/AuthenticationResponseModel';

export interface AuthApiService {
    login(credentials: LoginCredentials): Observable<LoginResponseModel>;
    getAuthentication(): Observable<AuthenticationResponseModel>;
}
