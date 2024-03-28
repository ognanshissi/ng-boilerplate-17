import {HttpHandlerFn, HttpInterceptorFn, HttpRequest} from "@angular/common/http";

export const authInterceptorFn: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
  return next(req);

}

