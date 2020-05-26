import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DialogService } from '@core/services/dialog.service';
import { SharedModule } from '@shared/shared.module';
import { MainListRoutingModule } from 'app/public/main-list/main-list-routing.module';
import { MainListComponent } from 'app/public/main-list/main-list.component';

@NgModule({
  declarations: [MainListComponent],
  providers: [DialogService],
  imports: [CommonModule, SharedModule, MainListRoutingModule],
})
export class MainListModule {}
