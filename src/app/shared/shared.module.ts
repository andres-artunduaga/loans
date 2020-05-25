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
import { MatNativeDateModule } from '@angular/material/core';


import { HeaderComponent } from '@shared/components/header/header.component';
import { LogoComponent } from '@shared/components/logo/logo.component';
import { FooterComponent } from '@shared/components/footer/footer.component';
import { AmountSliderComponent } from '@shared/components/amount-slider/amount-slider.component';
import { TableComponent } from '@shared/components/table/table.component';
import { NavigationComponent } from '@shared/components/navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { GlobalAmountComponent } from './components/global-amount/global-amount.component';

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
  MatTooltipModule,
]

const sharedComponents = [
  HeaderComponent,
  LogoComponent,
  FooterComponent,
  AmountSliderComponent,
  TableComponent,
  NavigationComponent,
  GlobalAmountComponent,
]

@NgModule({
  declarations: [...sharedComponents],
  imports: [
    RouterModule, CommonModule, ReactiveFormsModule, ...materialModules
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
