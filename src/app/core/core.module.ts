import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiGatewayService } from './api-gateway.service';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [ApiGatewayService, AuthService, AuthGuard]
})
export class CoreModule { }
