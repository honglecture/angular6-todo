import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private auth: AuthService){}

  canActivate(): boolean {
    if(!this.auth.isAuthenticated()){
      console.log('invalid token!');
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}
