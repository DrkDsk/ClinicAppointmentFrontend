import {InjectionToken} from "@angular/core";
import {AuthApiService} from "./auth.api.service";

export const AUTH_API_SERVICE = new InjectionToken<AuthApiService>('AuthApiServiceInterface');
