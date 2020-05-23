import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from 'app/public/public-routing.module';
import { PublicLayoutComponent } from 'app/public/public-layout/public-layout.component';
import { SharedModule } from 'app/shared/shared.module';


@NgModule({
  declarations: [PublicLayoutComponent],
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedModule,
  ],
})
export class PublicModule { }
