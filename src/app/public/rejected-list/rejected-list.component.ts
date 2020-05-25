import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Location } from "@angular/common";
import { Credit } from '@core/models/credit.model';
import { ZNBTableFieldDefinition } from '@core/types/table.types';
import { CreditService } from '@core/services/credit.service';

@Component({
  selector: 'znb-rejected-list',
  templateUrl: './rejected-list.component.html',
  styleUrls: ['./rejected-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RejectedListComponent implements OnInit {

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
      title: 'Estado del credito',
      getData: credit => credit.status === "approved" ? "Aprobado" : "Rechazado",
      width: '20%',
      templateName: 'regularCell',
    },
  ];

  credits:Credit[];

  constructor(
    private creditService:CreditService,
    private ref: ChangeDetectorRef,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.retrieveCredits();
  }

  retrieveCredits(){
    this.creditService.getRejectedCreditsWithUsers().subscribe(
      credits => {
        this.credits = credits;
        this.ref.markForCheck();
      }
    )
  }

  goBack(){
    this.location.back();
  }

}
