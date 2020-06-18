import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
               .pipe(
                 retry(1),
                 catchError((error: HttpErrorResponse) => {
                  let message = '';

                  if(error.error instanceof ErrorEvent) {
                    message = `Error : ${error.error.message}`;
                  } else {
                    message = `Error : ${error.status} \n Message : ${error.message}`;
                  }
                  
                  console.error('Error ', error);

                  return throwError(message);
                 })
               );
  }
}
