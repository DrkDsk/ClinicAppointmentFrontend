import {InjectionToken} from '@angular/core';
import {DoctorRepository} from './doctor.repository';

export const DOCTOR_REPOSITORY = new InjectionToken<DoctorRepository>('DoctorRepositoryInterface')
