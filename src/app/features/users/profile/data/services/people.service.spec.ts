import {TestBed} from '@angular/core/testing';

import {ProfileServiceImpl} from './profile.service.impl';

describe('ProfileServiceImpl', () => {
  let service: ProfileServiceImpl;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileServiceImpl);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
