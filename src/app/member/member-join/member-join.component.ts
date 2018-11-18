import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { MemberService } from '../member.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member-join',
  templateUrl: './member-join.component.html',
  styleUrls: ['./member-join.component.css']
})
export class MemberJoinComponent implements OnInit {

  member:Member = new Member();

  constructor(private memberService:MemberService,
    private router:Router) { }

  ngOnInit() {}

  join(){
    this.memberService.join(this.member).subscribe(
      result => {
        console.log(result);
        this.router.navigate(['']);
      }
    );
  }

}