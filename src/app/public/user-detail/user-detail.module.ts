import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDetailRoutingModule } from './user-detail-routing.module';
import { DialogService } from '@core/services/dialog.service';


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
