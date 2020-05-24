import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatTooltipModule} from '@angular/material/tooltip';


import { HeaderComponent } from '@shared/components/header/header.component';
import { LogoComponent } from '@shared/components/logo/logo.component';
import { FooterComponent } from '@shared/components/footer/footer.component';
import { AmountSliderComponent } from './components/amount-slider/amount-slider.component';
import { MatNativeDateModule } from '@angular/material/core';
import { TableComponent } from './components/table/table.component';

const materialModules = [
  ScrollingModule,
  MatSidenavModule,
  MatToolbarModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatButtonModule,
  MatSliderModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTooltipModule
]

const sharedComponents = [
  HeaderComponent,
  LogoComponent,
  FooterComponent,
  AmountSliderComponent,
  TableComponent,
]

@NgModule({
  declarations: [...sharedComponents],
  imports: [
    CommonModule, ReactiveFormsModule, ...materialModules
  ],
  providers: [
    MatDatepickerModule
  ],
  exports: [
    ReactiveFormsModule,
    ...materialModules,
    ...sharedComponents
  ]
})
export class SharedModule { }
