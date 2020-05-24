import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';

@Component({
  selector: 'znb-amount-slider',
  templateUrl: './amount-slider.component.html',
  styleUrls: ['./amount-slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AmountSliderComponent {

  @Input() message = '¿Cuanto dinero necesitas?';
  @Output() amount:EventEmitter<number> = new EventEmitter<number>();

  amountValue = 10000;

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
