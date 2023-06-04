import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
export interface CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class CheckLoginGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private toarst: ToastrService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if(localStorage.getItem('token')){
      return true
    }else {
      this.toarst.warning('You are not logged in');
      // Redirect to login page
      this.router.navigate(['/login']);
      return false;
    }
  }
}
