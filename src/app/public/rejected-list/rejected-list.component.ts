import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'znb-rejected-list',
  templateUrl: './rejected-list.component.html',
  styleUrls: ['./rejected-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RejectedListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
