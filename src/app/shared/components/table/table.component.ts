import { MediaMatcher } from '@angular/cdk/layout';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  TemplateRef,
} from '@angular/core';

import { ZNBTableFieldDefinition } from '@core/types/table.types';

@Component({
  selector: 'znb-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {
  @Input() dataSource: any[] | null | undefined = [];
  @Input() fieldDefinitions: ZNBTableFieldDefinition<any>[] = [];
  @Input() templateDefinitions!: {
    [name: string]: TemplateRef<any>;
  };
  @Input() zeroStateIcon = 'error_outline';
  @Input() zeroStateMsg = 'No hay datos disponibles';
  @Input() bannerMsg = '';
  @Input() headerMobileTitle = 'Listado';

  mobileQuery: MediaQueryList;
  // tslint:disable-next-line: variable-name
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 900px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);
  }
}
