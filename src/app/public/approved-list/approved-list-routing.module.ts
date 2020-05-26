import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ApprovedListComponent } from 'app/public/approved-list/approved-list.component';


const routes: Routes = [{
  path: '',
  component: ApprovedListComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApprovedListRoutingModule { }
