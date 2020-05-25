import { Component, OnInit, ChangeDetectionStrategy, Input, TemplateRef } from '@angular/core';
import { ZNBTableFieldDefinition } from '@core/types/table.types';

@Component({
  selector: 'znb-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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
}
