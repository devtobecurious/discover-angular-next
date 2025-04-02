import { HttpHandlerFn, HttpRequest, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";

export const loggingInterceptor = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
  console.info('loggingInterceptor', req.url)
  console.info('loggingInterceptor', req.method)

  return next(req)
}
