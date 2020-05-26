import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';

import { MAX_LOAN_VALUE, MIN_LOAN_VALUE } from '@core/constants/globals';

@Component({
  selector: 'znb-amount-slider',
  templateUrl: './amount-slider.component.html',
  styleUrls: ['./amount-slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AmountSliderComponent {

  @Input() message = '¿Cuanto dinero necesitas?';
  @Output() amount:EventEmitter<number> = new EventEmitter<number>();

  amountValue = MIN_LOAN_VALUE;
  minLoan = MIN_LOAN_VALUE / 1000;
  maxLoan = MAX_LOAN_VALUE / 1000;

  constructor() { }

  formatLabel(value: number) {
    return value + 'k';
  }

  onChange(changes: MatSliderChange): void {
    if( changes.value ){
      this.amountValue = changes.value * 1000;
      this.amount.emit( changes.value );
    }
  }

}
