import { Observable } from "rxjs";
import { LoginCredentials } from "../../domain/entities/credential";
import { LoginResponseModel } from "../models/login.response.model";

export interface LoginApiService {
    login(credentials: LoginCredentials): Observable<LoginResponseModel>;
}