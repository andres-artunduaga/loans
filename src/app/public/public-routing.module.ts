import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HOME } from '@core/constants/paths';
import { PublicLayoutComponent } from './public-layout/public-layout.component';

const routes: Routes = [
  {
    path: HOME,
    component: PublicLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./main-list/main-list.module').then(module => module.MainListModule),
      },
      {
        path: ':id',
        loadChildren: () => import('./user-detail/user-detail.module').then(module => module.UserDetailModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
