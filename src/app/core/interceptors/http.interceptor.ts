import { HttpErrorResponse, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import {AuthService} from "@socle/core/services";
import {Router} from "@angular/router";
import {inject} from "@angular/core";
import {catchError, throwError} from "rxjs";

export const authInterceptorFn: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (!req.url.includes('/auth')) {
    const reqClone = req.clone({
      setHeaders: {authorization: `Bearer ${authService.getAuthToken()}`},
    });
    return next(reqClone);
  }

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        router.navigate(['/auth/login']);
      }
      return throwError(() => error);
    })
  );

}

