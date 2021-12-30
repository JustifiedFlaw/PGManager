import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpErrorResponse
   } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MessageService } from './message.service';
import { Exception } from './models/exception';

@Injectable({
    providedIn: 'root'
  })
export class HttpErrorInterceptor implements HttpInterceptor {

    constructor(private messageService: MessageService){}

intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request)
        .pipe(

            catchError((error: HttpErrorResponse) => {

                const exception = new Exception(error);

                this.messageService.add(exception.message);

                return throwError(exception.message);
            })
        )
    }
}