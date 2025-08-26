import { Observable } from "rxjs";
import { LoginCredentials } from "../entities/credential";

export interface LoginRepository {
    login(credentials: LoginCredentials): Observable<string>;
}