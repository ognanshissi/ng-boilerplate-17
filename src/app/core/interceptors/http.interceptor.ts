import {HttpHandlerFn, HttpInterceptorFn, HttpRequest} from "@angular/common/http";

const authInterceptorFn: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
  return next(req);

}

export default authInterceptorFn;
