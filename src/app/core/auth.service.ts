import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { JwtHelper } from 'angular2-jwt';
import { Member } from '../member/member.model';
import { Observable} from 'rxjs';
import { tap } from 'rxjs/operators';
import { ApiGatewayService } from './api-gateway.service';
import { Token } from './token';

@Injectable()
export class AuthService {
  private jwtHelper:JwtHelper;
  TOKEN_NAME = environment.tokenName;

  constructor(private apiGatewayService:ApiGatewayService) {
    this.jwtHelper = new JwtHelper();
  }

  login(member:Member): Observable<Token>{
    return this.apiGatewayService.post<Token>(`auth/login`, JSON.stringify(member))
    .pipe(tap(res => this.setToken(res.token)))
  }

  getMember():Observable<Member>{
    return this.apiGatewayService.get<Member>(`auth/member/${this.getUserid()}`);
  }

  signout(): void {
    this.removeToken();
  }

  // 토큰 유효성 검증
  isAuthenticated(): boolean {
    const token = this.getToken();
    return token ? !this.isTokenExpired(token) : false;
  }

  getToken(): string {
    return localStorage.getItem(this.TOKEN_NAME);
  }

  setToken(token: string): void {
    localStorage.setItem(this.TOKEN_NAME, token);
  }

  removeToken(): void {
    localStorage.removeItem(this.TOKEN_NAME);
  }

  isTokenExpired(token: string) {
    return this.jwtHelper.isTokenExpired(token);
  }

  getUserid(): string {
    return this.jwtHelper.decodeToken(this.getToken()).id;
  }

}