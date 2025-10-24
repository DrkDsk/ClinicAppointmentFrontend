import {InjectionToken} from '@angular/core';
import {ProfileRepository} from './profile.repository';

export const PROFILE_REPOSITORY_TOKEN = new InjectionToken<ProfileRepository>("ProfileRepositoryInterface");
