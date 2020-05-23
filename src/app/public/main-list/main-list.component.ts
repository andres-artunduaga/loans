import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'znb-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
