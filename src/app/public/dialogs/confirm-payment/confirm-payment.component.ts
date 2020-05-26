import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Credit } from '@core/models/credit.model';
import { CreditService } from '@core/services/credit.service';
import { NewCreditComponent } from '../new-credit/new-credit.component';

@Component({
  selector: 'znb-confirm-payment',
  templateUrl: './confirm-payment.component.html',
  styleUrls: ['./confirm-payment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmPaymentComponent {
  credit: Credit;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<NewCreditComponent>,
    private creditService: CreditService,
  ) {
    this.credit = this.data;
    console.log(this.credit);
  }

  payCredit() {
    this.credit.paid = true;
    this.creditService.updateCreditPayment(this.credit).subscribe(_ => {
      this.close();
    });
  }

  close() {
    this.dialogRef.close();
  }
}
