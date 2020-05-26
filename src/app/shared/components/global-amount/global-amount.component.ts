import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { TransactionsService } from '@core/services/transactions.service';

@Component({
  selector: 'znb-global-amount',
  templateUrl: './global-amount.component.html',
  styleUrls: ['./global-amount.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GlobalAmountComponent implements OnInit {

  total:number;

  constructor(
    private txService: TransactionsService,
    private ref: ChangeDetectorRef,
  ){ }

  ngOnInit(): void {
    this.txService.globalAmount$.subscribe(
      amount => {
        this.total = amount;
        this.ref.markForCheck();
      }
    )
  }

}
