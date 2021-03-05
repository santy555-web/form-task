import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad,Route , RouterStateSnapshot, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserguardService implements CanActivate,CanLoad {

  constructor() { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
    if(localStorage.getItem("user_name")!=null)
    {
      return true;
    }
    else
    {
      //this._router.navigate(['/login']);
      alert('login first to access this page')
      return false;
    }

}


  canLoad(route: Route,segment:UrlSegment[]): boolean {
    if(localStorage.getItem("user_name")!=null)
    {
      return true;
    }
    else
    {
      //this._router.navigate(['/login']);
      alert('login first to access this page')
      return false;
    }
  }

}
