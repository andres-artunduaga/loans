import { Component, OnInit, ChangeDetectionStrategy, Inject, ChangeDetectorRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'znb-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateUserComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<CreateUserComponent>,
    private ref: ChangeDetectorRef,
  ){ }

  close() {
    this.dialogRef.close(null);
  }

}
