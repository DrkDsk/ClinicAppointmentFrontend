import { InjectionToken } from '@angular/core';
import { LoginApiService } from './login_api.service';
import { LoginRepository } from '../../domain/repositories/login.repository';

export const LOGIN_API_SERVICE = new InjectionToken<LoginApiService>('LoginApiServiceInterface');
export const LOGIN_REPOSITORY = new InjectionToken<LoginRepository>('LoginRepositoryInterface')