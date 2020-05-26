import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DialogService } from '@core/services/dialog.service';
import { SharedModule } from '@shared/shared.module';
import { ApprovedListRoutingModule } from './approved-list-routing.module';
import { ApprovedListComponent } from './approved-list.component';


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
