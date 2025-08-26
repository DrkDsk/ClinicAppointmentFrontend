import { HttpRequest, HttpInterceptorFn, HttpHandlerFn } from '@angular/common/http';

export const baseUrlInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn) => {
    const apiReq = req.url.startsWith('http') ? req : req.clone({ url: `http://127.0.0.1:8000/${req.url}` });
    return next(apiReq);
};
