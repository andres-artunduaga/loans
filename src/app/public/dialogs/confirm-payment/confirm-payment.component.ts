import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NewCreditComponent } from '../new-credit/new-credit.component';
import { CreditService } from '@core/services/credit.service';
import { Credit } from '@core/models/credit.model';

@Component({
  selector: 'znb-confirm-payment',
  templateUrl: './confirm-payment.component.html',
  styleUrls: ['./confirm-payment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmPaymentComponent {

  credit:Credit;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<NewCreditComponent>,
    private creditService: CreditService,
  ){
    this.credit = this.data;
    console.log(this.credit);
  }

  payCredit(){
    this.credit.paid = true;
    this.creditService.updateCreditPayment(this.credit).subscribe(
      _ => {
        this.close();
      }
    )
  }

  close(){
    this.dialogRef.close()
  }

}
