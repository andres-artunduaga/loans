import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainListRoutingModule } from './main-list-routing.module';
import { MainListComponent } from './main-list.component';
import { DialogService } from '@core/services/dialog.service';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [MainListComponent],
  providers: [
    DialogService
  ],
  imports: [
    CommonModule,
    SharedModule,
    MainListRoutingModule
  ]
})
export class MainListModule { }
