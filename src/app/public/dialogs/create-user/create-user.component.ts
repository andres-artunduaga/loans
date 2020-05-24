import { Component, ChangeDetectionStrategy, Inject, ChangeDetectorRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '@core/services/user.service';
import { User } from '@core/models/user.model';
import { Credit } from '@core/models/credit.model';
import { MAX_MONTHS_FOR_PAYMENT } from '@core/constants/globals';

@Component({
  selector: 'znb-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateUserComponent {
  createUserForm: FormGroup;

  user = {
    name: '',
    uid: null,
    email: '',
  };

  credit = {
    amount: 0,
    paymentDate: '',
  };

  minDate:Date;
  maxDate:Date;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<CreateUserComponent>,
    private ref: ChangeDetectorRef,
    private fb: FormBuilder,
    private userService: UserService,
  ) {


    this.minDate = new Date();
    this.maxDate = new Date();
    this.maxDate.setMonth(this.maxDate.getMonth()+MAX_MONTHS_FOR_PAYMENT);

    this.createUserForm = this.fb.group({
      name: [, [Validators.required]],
      uid: [, [Validators.required]],
      email: [, [Validators.required, Validators.email]],
      amount: [, [Validators.required]],
      paymentDate: [],
    });
  }

  createUserCredit() {
    if (this.createUserForm.valid || true) {
      this.processFormValue(this.createUserForm.value);
      // TODO: Store data
      // this.userService.saveUser()
    }
  }

  processFormValue(formData: any): { user: User; credit: Credit } {
    const { name, uid, email } = formData;
    const { amount, paymentDate } = formData;

    const user: User = { name, uid, email };
    const credit: Credit = {
      amount: amount * 1000,
      paymentDate
    };

    console.log(user);
    return { user, credit }
  }

  updateAmountFormValue(value: number) {
    this.createUserForm.get('amount')?.setValue(value);
  }

  close() {
    this.dialogRef.close(null);
  }
}
