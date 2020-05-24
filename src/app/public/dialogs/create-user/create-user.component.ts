import { Component, ChangeDetectionStrategy, Inject, ChangeDetectorRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'znb-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateUserComponent {

  createUserForm: FormGroup;

  user = {
    name: '',
    uid: null,
    email: ''
  };

  credit = {
    amount: 0,
    paymentDate:  '',
  };

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<CreateUserComponent>,
    private ref: ChangeDetectorRef,
    private fb: FormBuilder,
  ){
    this.createUserForm = this.fb.group({
      name: [this.user.name, [Validators.required]],
      uid: [this.user.uid, [Validators.required]],
      email: [this.user.email, [Validators.required, Validators.email]],
      amount: [this.credit.amount, [Validators.required]],
      paymentDate: [this.credit.paymentDate],
    });
  }

  createUserCredit(){
    if(this.createUserForm.valid){
      // TODO: Store data
      console.log( this.createUserForm.value );
    }
  }

  updateAmountFormValue( value:number ){
    this.createUserForm.get('amount')?.setValue(value);
  }

  close() {
    this.dialogRef.close(null);
  }

}
