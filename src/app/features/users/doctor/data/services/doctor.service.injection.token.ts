import {InjectionToken} from '@angular/core';
import {DoctorService} from './doctor.service';

export const DOCTOR_SERVICE_INJECTION_TOKEN = new InjectionToken<DoctorService>("DoctorServiceInterface")
