import { map, Observable } from "rxjs";
import { LoginCredentials } from "../../domain/entities/credential";
import { LoginRepository } from "../../domain/repositories/login.repository";
import { Inject, Injectable } from "@angular/core";
import { LOGIN_API_SERVICE } from "../services/login.injection.token";
import { LoginApiService } from "../services/login_api.service";

@Injectable({
    providedIn: 'root'
})

export class LoginRepositoryImpl implements LoginRepository {

    constructor(@Inject(LOGIN_API_SERVICE) private loginApiService: LoginApiService) { }

    login(credentials: LoginCredentials): Observable<string> {
        const request = this.loginApiService.login(credentials);

        return request.pipe(
            map(response => response.token)
        );
    }

}