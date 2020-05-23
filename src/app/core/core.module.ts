import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Environment } from 'environments/environment';
import { ENVIRONMENT } from '@core/constants/tokens';
import { ApiService } from '@core/http/api.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
})
export class CoreModule {
  static forRoot(environment: Environment): ModuleWithProviders{
    return {
      ngModule: CoreModule,
      providers: [
        ApiService,
        {provide: ENVIRONMENT, useValue: environment}
      ],
    }
  }
}
