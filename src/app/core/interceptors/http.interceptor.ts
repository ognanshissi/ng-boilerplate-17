import {HttpHandlerFn, HttpInterceptorFn, HttpRequest} from "@angular/common/http";

const httpInterceptorFn: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
  return next(req);

}

export default httpInterceptorFn;
