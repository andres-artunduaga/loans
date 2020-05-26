import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { ENVIRONMENT } from '@core/constants/tokens';
import { ApiService } from '@core/services/api.service';
import { Environment } from 'environments/environment';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
})
export class CoreModule {
  static forRoot(environment: Environment): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [ApiService, { provide: ENVIRONMENT, useValue: environment }],
    };
  }
}
