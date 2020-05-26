import { Location } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Credit } from '@core/models/credit.model';
import { User } from '@core/models/user.model';
import { DialogService } from '@core/services/dialog.service';
import { UserService } from '@core/services/user.service';
import { ZNBTableFieldDefinition } from '@core/types/table.types';
import { ConfirmPaymentComponent } from '../dialogs/confirm-payment/confirm-payment.component';
import { NewCreditComponent } from '../dialogs/new-credit/new-credit.component';

@Component({
  selector: 'znb-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDetailComponent implements OnInit {
  fieldDefinitions: ZNBTableFieldDefinition<Credit>[] = [
    {
      field: 'index',
      title: '#',
      getData: _ => {},
      width: '30px',
      templateName: 'indexCell',
    },
    {
      field: 'identifier',
      title: 'Credito No.',
      getData: credit => credit.id,
      width: '20%',
      templateName: 'regularCell',
    },
    {
      field: 'amount',
      title: 'Monto',
      getData: credit => credit.amount,
      width: '20%',
      templateName: 'regularCell',
    },
    {
      field: 'status',
      title: 'Estado',
      getData: credit => (credit.status === 'approved' ? 'Aprobado' : 'Rechazado'),
      width: '20%',
      templateName: 'regularCell',
    },
    {
      field: 'paid',
      title: 'Estado de pago',
      getData: credit =>
        credit.status === 'approved' ? (credit.paid ? 'Pagado' : 'No Pagado') : 'N/A',
      width: '20%',
      templateName: 'chipCell',
    },
    {
      field: 'actions',
      title: 'Acciones',
      getData: _ => {},
      width: '200px',
      templateName: 'actionCell',
    },
  ];

  user: User;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private ref: ChangeDetectorRef,
    private location: Location,
    private dialogService: DialogService,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const userId: number = params?.id;
      if (userId) {
        this.retrieveUserData(userId);
      }
    });
    this.ref.markForCheck();
  }

  retrieveUserData(userId: number) {
    this.userService.getUserCredits(userId).subscribe(user => {
      this.user = user;
      console.log('user', this.user);
      this.ref.markForCheck();
    });
  }

  payDebt(creditData: Credit) {
    const dialogRef = this.dialogService.showCustomDialog(ConfirmPaymentComponent, creditData);
    dialogRef.afterClosed().subscribe(() => {
      if (this.user?.id) {
        this.retrieveUserData(this.user.id);
      }
    });
  }

  addCredit() {
    const dialogRef = this.dialogService.showCustomDialog(NewCreditComponent, this.user);
    dialogRef.afterClosed().subscribe(() => {
      if (this.user?.id) {
        this.retrieveUserData(this.user.id);
      }
    });
  }

  canAcquireNewCredit(): boolean {
    return this.user?.status === 'approved';
  }

  goBack() {
    this.location.back();
  }
}
