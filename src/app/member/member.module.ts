import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberComponent } from './member.component';
import { MemberJoinComponent } from './member-join/member-join.component';
import { MemberLoginComponent } from './member-login/member-login.component';
import { MemberRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MemberService } from './member.service';
import { MemberProfileComponent } from './member-profile/member-profile.component';

@NgModule({
  declarations: [MemberComponent, MemberJoinComponent, MemberLoginComponent, MemberProfileComponent],
  imports: [
    CommonModule,
    MemberRoutingModule,
    FormsModule,
    SharedModule
  ],
  providers: [MemberService]
})
export class MemberModule { }
