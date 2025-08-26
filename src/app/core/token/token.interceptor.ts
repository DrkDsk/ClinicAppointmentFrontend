// token.interceptor.ts
import { inject } from '@angular/core';
import { HttpRequest, HttpInterceptorFn, HttpHandlerFn } from '@angular/common/http';
import { TokenService } from './token.service';

export const tokenInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn) => {
    const tokenService = inject(TokenService)

    const token = tokenService.getToken();
    if (token) {
        const cloned = req.clone({
            headers: req.headers.set('Authorization', `Bearer ${token}`)
        });

        return next(cloned);
    }
    return next(req);
}