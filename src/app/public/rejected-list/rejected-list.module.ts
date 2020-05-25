import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RejectedListRoutingModule } from './rejected-list-routing.module';
import { RejectedListComponent } from './rejected-list.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [RejectedListComponent],
  imports: [
    CommonModule,
    RejectedListRoutingModule,
    SharedModule,
  ]
})
export class RejectedListModule { }
