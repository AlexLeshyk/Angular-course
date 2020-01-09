import { Injectable } from '@angular/core';
import { HttpEvent, HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthorizationService } from  '../course-page/services/authorization.service';
import { Router } from '@angular/router';
import { tap, catchError } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private auth: AuthorizationService,
    private router: Router
  ) {
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // console.log('Intercept request', req.params);

    if(this.auth.getAutorizationValue()) {
      req = req.clone({
        headers: req.headers.append('Auth', 'Some token for authorization'),
        setParams: {
          auth: this.auth.token
        }
      })
    }

    return next.handle(req).pipe(
      tap(() => {
        console.log('Intercept');
      }),
      catchError( (error: HttpErrorResponse) => {
        console.log('[Interceptor Error]: ', error);
        if (error.status === 401) {
          this.auth.logout();
          this.router.navigate(['/courses'], {
            queryParams : {
              authFailed: true
            }
          });
        }
        return throwError(error);
      })
    )
  }
}
