import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { APPROVED_CREDITS, REJECTED_CREDITS, HOME } from '@core/constants/paths';

@Component({
  selector: 'znb-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent implements OnInit {

  navigationItems:{
    name:string,
    link:string,
    icon:string
  }[] = [
    {
      name: "Inicio",
      link: `/${HOME}`,
      icon: "home"
    },
    {
      name: "Aprobados",
      link: `/${APPROVED_CREDITS}`,
      icon: "check"
    },
    {
      name: "Rechazados",
      link: `/${REJECTED_CREDITS}`,
      icon: "close"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
