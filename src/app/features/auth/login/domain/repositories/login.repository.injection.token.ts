import { InjectionToken } from '@angular/core';
import { LoginRepository } from './login.repository';

export const LOGIN_REPOSITORY = new InjectionToken<LoginRepository>('LoginRepositoryInterface')