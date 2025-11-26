import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '@env/environment';
import { Logger } from '../logger.service';

const log = new Logger('ErrorHandlerInterceptor');

/**
 * Adds a default error handler to all requests.
 */
@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError((error) => this.errorHandler(error, request)));
  }
  private errorHandler(error: HttpErrorResponse, request: HttpRequest<any>): Observable<HttpEvent<any>> {
    if (error.status === 404) {
      if (!environment.production) {
        log.error('404 Not Found', {
          url: request.url,
          method: request.method,
          error: error,
        });
      }
      return throwError(() => ({
        status: 404,
        message: 'Ресурс не знайдено',
        url: request.url,
      }));
    }
  }
}
