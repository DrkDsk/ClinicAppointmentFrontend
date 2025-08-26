import { InjectionToken } from "@angular/core";
import { LoginApiService } from "./login_api.service";

export const LOGIN_API_SERVICE = new InjectionToken<LoginApiService>('LoginApiServiceInterface');