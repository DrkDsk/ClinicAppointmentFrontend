import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {TokenService} from '../shared/data/services/token/token.service';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const tokenService: TokenService = inject(TokenService);
  const token = tokenService.getToken();

  return token != null ? true : router.createUrlTree(['/login'])
};
