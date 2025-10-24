import {InjectionToken} from '@angular/core';
import {ProfileApiService} from './profile.api.service';

export const PROFILE_API_SERVICE_TOKEN = new InjectionToken<ProfileApiService>('ProfileServiceInterface');
