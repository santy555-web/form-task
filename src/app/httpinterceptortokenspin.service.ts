import { Injectable } from '@angular/core';
import { HttpInterceptor,HttpEvent, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { CommonService } from './common.service';
@Injectable({
  providedIn: 'root'
})
export class HttpinterceptortokenspinService implements HttpInterceptor {

  constructor(private _data:CommonService) { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler):
    Observable<HttpEvent<any>>
    {
    this._data.show();
    return next.handle(req).pipe(finalize(() =>this._data.hide()));

    }



}
