import { Injectable } from '@angular/core';
import { HttpInterceptor,HttpEvent, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpinterceptorstokanService implements HttpInterceptor {

  constructor() { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const head = new HttpHeaders().set('Content-type','application/json');
    const httpreq= req.clone({
    headers: head,
    });
   // console.log("from interceptor req obj", httpreq);
   return next.handle(httpreq);
  }
}


