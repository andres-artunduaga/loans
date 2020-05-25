import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApprovedListComponent } from './approved-list.component';


const routes: Routes = [{
  path: '',
  component: ApprovedListComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApprovedListRoutingModule { }
