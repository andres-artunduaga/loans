import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApprovedListRoutingModule } from './approved-list-routing.module';
import { ApprovedListComponent } from './approved-list.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [ApprovedListComponent],
  imports: [
    CommonModule,
    ApprovedListRoutingModule,
    SharedModule,
  ]
})
export class ApprovedListModule { }
