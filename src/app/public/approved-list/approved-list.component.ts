import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Location } from '@angular/common';
import { ZNBTableFieldDefinition } from '@core/types/table.types';
import { Credit } from '@core/models/credit.model';
import { CreditService } from '@core/services/credit.service';
import { PaidStatus } from '@core/types/credit.types';

@Component({
  selector: 'znb-approved-list',
  templateUrl: './approved-list.component.html',
  styleUrls: ['./approved-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApprovedListComponent implements OnInit {

  fieldDefinitions:ZNBTableFieldDefinition<Credit>[] = [
    {
      field: 'index',
      title: '#',
      getData: _ => {},
      width: '30px',
      templateName: 'indexCell',
    },
    {
      field: 'id',
      title: 'Credit No.',
      getData: credit => credit.id,
      width: '10%',
      templateName: 'regularCell',
    },
    {
      field: 'nombre',
      title: 'Nombre Solicitante',
      getData: credit => credit.user?.name,
      width: '25%',
      templateName: 'regularCell',
    },
    {
      field: 'amount',
      title: 'Monto Solicitado',
      getData: credit => credit.amount,
      width: '20%',
      templateName: 'regularCell',
    },
    {
      field: 'status',
      title: 'Estado de pago',
      getData: credit => credit.paid ? "Pagado" : "Sin pagar",
      width: '20%',
      templateName: 'regularCell',
    },
    {
      field: 'actions',
      title: 'Acciones',
      getData: _ => {},
      width: '100px',
      templateName: 'actionCell',
    },
  ];

  credits:Credit[];

  paidStatus?:PaidStatus

  constructor(
    private creditService: CreditService,
    private ref:ChangeDetectorRef,
    private location:Location,
  ){ }

  ngOnInit(): void {
    this.retrieveCredits("unpaid");
  }

  retrieveCredits( filterByPaidStatus?:PaidStatus ){
    this.creditService.getCreditsWithUsers(filterByPaidStatus).subscribe(
      credits => {
        this.credits = credits;
        this.ref.markForCheck();
      }
    )
  }

  togglePaidCreditsVisibility(status?:PaidStatus){
    this.retrieveCredits(status);
    this.ref.markForCheck();
  }

  payDebt(creditData:Credit){

  }

  goBack(){
    this.location.back();
  }

}
