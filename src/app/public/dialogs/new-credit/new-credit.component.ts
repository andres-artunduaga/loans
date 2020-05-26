import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { MAX_MONTHS_FOR_PAYMENT } from '@core/constants/globals';
import { Credit } from '@core/models/credit.model';
import { User } from '@core/models/user.model';
import { CreditService } from '@core/services/credit.service';

@Component({
  selector: 'znb-new-credit',
  templateUrl: './new-credit.component.html',
  styleUrls: ['./new-credit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewCreditComponent {
  newCreditForm: FormGroup;
  minDate: Date;
  maxDate: Date;
  user: User;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<NewCreditComponent>,
    private fb: FormBuilder,
    private creditService: CreditService,
  ) {
    this.minDate = new Date();
    this.maxDate = new Date();
    this.maxDate.setMonth(this.maxDate.getMonth() + MAX_MONTHS_FOR_PAYMENT);
    this.user = this.data;

    this.newCreditForm = this.fb.group({
      amount: [, [Validators.required]],
      paymentDate: [],
    });
  }

  createUserCredit(formDirective: FormGroupDirective) {
    if (this.newCreditForm.valid) {
      const credit = this.processFormValue(this.newCreditForm.value);
      this.creditService.saveCredit({ ...credit, userId: this.user.id }).subscribe(_ => {
        this.newCreditForm.reset();
        // Dirty hack to reset the form directive => https://github.com/angular/components/issues/4190
        formDirective.reset();
        this.close();
      });
    }
  }

  processFormValue(formData: any): Credit {
    const { amount, paymentDate } = formData;
    const credit: Credit = {
      amount: amount * 1000,
      paymentDate,
      paid: false,
      status: 'approved',
    };
    return credit;
  }

  updateAmountFormValue(value: number) {
    this.newCreditForm.get('amount')?.setValue(value);
  }

  close() {
    this.dialogRef.close(null);
  }
}
