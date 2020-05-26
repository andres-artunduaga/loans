import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HOME } from '@core/constants/paths';

@Component({
  selector: 'znb-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogoComponent {

  @Input() size = "30px";

  constructor( private route: Router ){}

  goToHome(){
    this.route.navigate([HOME]);
  }

}
