import { HttpRequest, HttpInterceptorFn, HttpHandlerFn } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';

export const baseUrlInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn) => {
    const urlBase = environment.apiUrl;
    const apiReq = req.url.startsWith('http') ? req : req.clone({ url: `${urlBase}/${req.url}` });
    return next(apiReq);
};
