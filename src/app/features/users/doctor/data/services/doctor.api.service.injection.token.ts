import {InjectionToken} from '@angular/core';
import {DoctorApiService} from './doctor.api.service';

export const DOCTOR_API_SERVICE_INJECTION_TOKEN = new InjectionToken<DoctorApiService>("DoctorServiceInterface")
