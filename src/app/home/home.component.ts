import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  id:string;

  constructor(private authService:AuthService) { }

  ngOnInit() {
    if(this.authCheck()){
      this.id = this.authService.getUserid();
    }
  }

  authCheck():boolean{
    return this.authService.isAuthenticated();
  }

  logout(){
    this.authService.signout();
    this.id = null;
  }


}
