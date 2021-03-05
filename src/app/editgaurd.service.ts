import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TaskaddComponent } from './usedetail/taskadd/taskadd.component';

@Injectable({
  providedIn: 'root'
})
export class EditgaurdService implements CanDeactivate<TaskaddComponent>{

  constructor() { }
  canDeactivate(
    component: TaskaddComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): boolean
    {
      return confirm('Are you sure, you want to move away?');
    }
}
