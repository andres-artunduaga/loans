import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CreateUserComponent } from 'app/public/dialogs/create-user/create-user.component';
import { NewCreditComponent } from 'app/public/dialogs/new-credit/new-credit.component';
import { PublicLayoutComponent } from 'app/public/public-layout/public-layout.component';
import { PublicRoutingModule } from 'app/public/public-routing.module';
import { UserDetailComponent } from 'app/public/user-detail/user-detail.component';
import { SharedModule } from 'app/shared/shared.module';
import { ConfirmPaymentComponent } from 'app/public/dialogs/confirm-payment/confirm-payment.component';


@NgModule({
  declarations: [PublicLayoutComponent, CreateUserComponent, UserDetailComponent, NewCreditComponent, ConfirmPaymentComponent],
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedModule,
  ],
})
export class PublicModule { }
