import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { SharedService } from './shared.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private sharedService: SharedService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Promise<boolean> {
    console.log('=====17');
    let isAuthenticated = false;

    if (localStorage.getItem('token')) {
      isAuthenticated = true;
    }
    this.sharedService.updateAuthentication(isAuthenticated);
    if (!isAuthenticated) {
      console.log('====24');
      this.router.navigateByUrl('/login');
    }
    return isAuthenticated;
  }
}
