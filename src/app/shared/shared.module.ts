import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';

const materialModules = [
  MatSidenavModule,
  MatToolbarModule
]

const sharedComponents = [
  HeaderComponent,
  LogoComponent,
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
