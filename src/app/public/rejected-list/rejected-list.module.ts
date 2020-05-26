import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { RejectedListRoutingModule } from './rejected-list-routing.module';
import { RejectedListComponent } from './rejected-list.component';


@NgModule({
  declarations: [RejectedListComponent],
  imports: [
    CommonModule,
    RejectedListRoutingModule,
    SharedModule,
  ]
})
export class RejectedListModule { }
