import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  //injects routes and authentication service.
  constructor(public auth: UserService, public router: Router) { }
  /* canActivate(): boolean {
     if (!this.auth.isAuthenticated()) {
       this.router.navigate(['/login']);
       return false;
     }
     return true;
   }*/

  canActivate(): boolean {
    const isAuthenticated = !!localStorage.getItem('access_token');

    if (!isAuthenticated) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}