import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {TokenService} from '../shared/data/services/token/token.service';
import {AppPaths} from '../constants/path.constants';

export const authGuard: CanActivateFn = (_childRoute, _state) => {
  const router = inject(Router);
  const tokenService: TokenService = inject(TokenService);
  const token = tokenService.getToken();

  return token != null ? true : router.createUrlTree([`/${AppPaths.login}`])
};
