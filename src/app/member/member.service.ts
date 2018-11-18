import { Injectable } from '@angular/core';
import { ApiGatewayService } from '../core/api-gateway.service';
import { Observable } from 'rxjs';
import { Member } from './member.model';

@Injectable()
export class MemberService {

  private authUrl = 'auth'

  constructor(private apiGatewayService:ApiGatewayService) {}

  login(member:Member):Observable<any>{
    return this.apiGatewayService.post<any>(`${this.authUrl}/login`, JSON.stringify(member));
  }

  join(member:Member):Observable<any>{
    return this.apiGatewayService.post<any>(`${this.authUrl}/join`, JSON.stringify(member));
  }

}