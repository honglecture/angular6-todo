import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-member-profile',
  templateUrl: './member-profile.component.html',
  styleUrls: ['./member-profile.component.css']
})
export class MemberProfileComponent implements OnInit {

  member:Member;

  constructor(private route: ActivatedRoute, private location: Location) { }


  ngOnInit() {
    this.getResolvedData();
  }

  private getResolvedData(){
    const resolvedData = <{member: Member}>this.route.snapshot.data;
    console.log(resolvedData);
    this.member = resolvedData.member;
  }

  goBack(){
   this.location.back();
  }

}
