import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DialogService } from '@core/services/dialog.service';
import { UserDetailRoutingModule } from 'app/public/user-detail/user-detail-routing.module';


@NgModule({
  declarations: [],
  providers: [
    DialogService,
  ],
  imports: [
    CommonModule,
    UserDetailRoutingModule
  ]
})
export class UserDetailModule { }
