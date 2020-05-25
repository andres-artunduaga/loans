import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RejectedListComponent } from './rejected-list.component';


const routes: Routes = [{
  path: '',
  component: RejectedListComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RejectedListRoutingModule { }
