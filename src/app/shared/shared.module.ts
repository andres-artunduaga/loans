import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { HeaderComponent } from '@shared/components/header/header.component';
import { LogoComponent } from '@shared/components/logo/logo.component';
import { FooterComponent } from '@shared/components/footer/footer.component';

const materialModules = [
  MatSidenavModule,
  MatToolbarModule
]

const sharedComponents = [
  HeaderComponent,
  LogoComponent,
  FooterComponent,
]

@NgModule({
  declarations: [...sharedComponents],
  imports: [
    CommonModule, ...materialModules
  ],
  exports: [
    ...materialModules,
    ...sharedComponents
  ]
})
export class SharedModule { }
