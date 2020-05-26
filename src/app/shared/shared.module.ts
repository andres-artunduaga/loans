import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';

import { AmountSliderComponent } from '@shared/components/amount-slider/amount-slider.component';
import { FooterComponent } from '@shared/components/footer/footer.component';
import { GlobalAmountComponent } from '@shared/components/global-amount/global-amount.component';
import { HeaderComponent } from '@shared/components/header/header.component';
import { LogoComponent } from '@shared/components/logo/logo.component';
import { NavigationComponent } from '@shared/components/navigation/navigation.component';
import { TableComponent } from '@shared/components/table/table.component';

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
  MatChipsModule,
];

const sharedComponents = [
  HeaderComponent,
  LogoComponent,
  FooterComponent,
  AmountSliderComponent,
  TableComponent,
  NavigationComponent,
  GlobalAmountComponent,
];

@NgModule({
  declarations: [...sharedComponents],
  imports: [RouterModule, CommonModule, ReactiveFormsModule, ...materialModules],
  providers: [MatDatepickerModule],
  exports: [ReactiveFormsModule, ...materialModules, ...sharedComponents],
})
export class SharedModule {}
