import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Environment } from 'environments/environment';
import { ENVIRONMENT } from 'app/core/constants/tokens';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
})
export class CoreModule {
  static forRoot(environment: Environment): ModuleWithProviders{
    return {
      ngModule: CoreModule,
      providers: [
        {provide: ENVIRONMENT, useValue: environment}
      ],
    }
  }
}
