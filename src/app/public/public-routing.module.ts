import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  HOME,
  USER_DETAIL,
  APPROVED_CREDITS,
  REJECTED_CREDITS,
} from '@core/constants/paths';
import { PublicLayoutComponent } from './public-layout/public-layout.component';

const routes: Routes = [
  {
    path: HOME,
    component: PublicLayoutComponent,
    children: [
      {
        path: HOME,
        loadChildren: () => import('./main-list/main-list.module').then(module => module.MainListModule),
      },
      {
        path: USER_DETAIL,
        loadChildren: () => import('./user-detail/user-detail.module').then(module => module.UserDetailModule),
      },
      {
        path: APPROVED_CREDITS,
        loadChildren: () => import('./approved-list/approved-list.module').then(module => module.ApprovedListModule),
      },
      {
        path: REJECTED_CREDITS,
        loadChildren: () => import('./rejected-list/rejected-list.module').then(module => module.RejectedListModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
