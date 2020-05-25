import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApprovedListRoutingModule } from './approved-list-routing.module';
import { ApprovedListComponent } from './approved-list.component';
import { SharedModule } from '@shared/shared.module';
import { DialogService } from '@core/services/dialog.service';


@NgModule({
  declarations: [ApprovedListComponent],
  providers: [DialogService],
  imports: [
    CommonModule,
    ApprovedListRoutingModule,
    SharedModule,
  ]
})
export class ApprovedListModule { }
