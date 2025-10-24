import {InjectionToken} from '@angular/core';
import {ProfileService} from './profile.service';

export const PROFILE_API_SERVICE_TOKEN = new InjectionToken<ProfileService>('ProfileServiceInterface');
