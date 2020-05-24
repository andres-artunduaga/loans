import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
      name:"Inicio",
      link:"/",
      icon:"home"
    },
    {
      name:"Aprobados",
      link:"/",
      icon:"check"
    },
    {
      name:"Rechazados",
      link:"/",
      icon:"close"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
