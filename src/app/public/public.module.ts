import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from 'app/public/public-routing.module';
import { PublicLayoutComponent } from 'app/public/public-layout/public-layout.component';
import { SharedModule } from 'app/shared/shared.module';
import { CreateUserComponent } from 'app/public/dialogs/create-user/create-user.component';
import { UserDetailComponent } from 'app/public/user-detail/user-detail.component';
import { NewCreditComponent } from 'app/public/dialogs/new-credit/new-credit.component';
import { ConfirmPaymentComponent } from './dialogs/confirm-payment/confirm-payment.component';


@NgModule({
  declarations: [PublicLayoutComponent, CreateUserComponent, UserDetailComponent, NewCreditComponent, ConfirmPaymentComponent],
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedModule,
  ],
})
export class PublicModule { }
