import {HttpErrorResponse, HttpHandlerFn, HttpInterceptorFn, HttpRequest} from '@angular/common/http';
import {inject} from '@angular/core';
import {Router} from '@angular/router';
import {AuthApiServiceImpl} from '../../features/auth/login/data/services/auth.api.service.impl';
import {TokenService} from '../shared/data/services/token/token.service';
import {catchError, throwError} from 'rxjs';
import {AppPaths} from '../constants/path.constants';

export const errorInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn) => {
  const router = inject(Router);
  const authService = inject(AuthApiServiceImpl);
  const tokenService = inject(TokenService)

  return next(req).pipe(
    catchError((err: unknown) => {
      if (err instanceof HttpErrorResponse && (err.status === 403 || err.status === 401)) {
        authService.logout?.();
        tokenService.removeToken()
        router.navigateByUrl(AppPaths.login, {replaceUrl: true}).then(_ => {
        });
      }

      return throwError(() => err);
    })
  );
}
