import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { MemberService } from '../member.service';
import { AuthService } from 'src/app/core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member-login',
  templateUrl: './member-login.component.html',
  styleUrls: ['./member-login.component.css']
})
export class MemberLoginComponent implements OnInit {

  member:Member = new Member();
  message:string;

  constructor(private memberService:MemberService,
     private authService:AuthService,
     private router:Router) { }

  ngOnInit() {}

  login(){
    this.authService.login(this.member).subscribe(
      ()=> this.router.navigate(['']),
      result=>{
        this.message = result.error.message;
      }
    );
  }

}