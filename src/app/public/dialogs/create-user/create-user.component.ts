import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { MAX_MONTHS_FOR_PAYMENT } from '@core/constants/globals';
import { Credit } from '@core/models/credit.model';
import { User } from '@core/models/user.model';
import { CreditService } from '@core/services/credit.service';
import { UserService } from '@core/services/user.service';
import { getRandomBoolean } from '@core/utils/functions';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'znb-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateUserComponent {
  createUserForm: FormGroup;

  minDate: Date;
  maxDate: Date;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<CreateUserComponent>,
    private ref: ChangeDetectorRef,
    private fb: FormBuilder,
    private userService: UserService,
    private creditService: CreditService,
  ) {
    this.minDate = new Date();
    this.maxDate = new Date();
    this.maxDate.setMonth(this.maxDate.getMonth() + MAX_MONTHS_FOR_PAYMENT);

    this.createUserForm = this.fb.group({
      name: [, [Validators.required]],
      uid: [, [Validators.required]],
      email: [, [Validators.required, Validators.email]],
      amount: [, [Validators.required]],
      paymentDate: [],
    });
  }

  createUserCredit(formDirective: FormGroupDirective) {
    if (this.createUserForm.valid) {
      const { user, credit } = this.processFormValue(this.createUserForm.value);

      // We are assuming an ideal world where every users have different uid ( cedula )
      // A validation must be done in backend side to avoid register users with same uid
      this.userService
        .saveUser(user)
        .pipe(
          switchMap(userData => {
            return this.creditService.saveCredit({ ...credit, userId: userData.id });
          }),
        )
        .subscribe(_ => {
          this.createUserForm.reset();
          // Dirty hack to reset the form directive => https://github.com/angular/components/issues/4190
          formDirective.reset();
          this.close();
        }, err => {
          // TODO: Notify User
          console.log(err);
          this.close();
        });
    }
  }

  processFormValue(formData: any): { user: User; credit: Credit } {
    const { name, uid, email } = formData;
    const { amount, paymentDate } = formData;

    // Simulation of approved/rejected loans
    const status = getRandomBoolean() ? 'approved' : 'rejected';

    const user: User = { name, uid, email, status };
    const credit: Credit = {
      amount: amount * 1000,
      paymentDate,
      paid: false,
      status,
    };

    return { user, credit };
  }

  updateAmountFormValue(value: number) {
    this.createUserForm.get('amount')?.setValue(value);
  }

  close() {
    this.dialogRef.close(null);
  }
}
