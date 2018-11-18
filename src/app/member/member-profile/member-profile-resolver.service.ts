import { Injectable } from '@angular/core';
import { Member } from '../member.model';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';

@Injectable()
export class MemberProfileResolverService implements Resolve<Member> {

  constructor(private authService:AuthService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    return this.authService.getMember();
   }
   
}
