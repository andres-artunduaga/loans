import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HOME } from '@core/constants/paths';

const routes: Routes = [
  {
    path: HOME,
    loadChildren: () => import('./public/public.module').then(module => module.PublicModule),
  },
  {
    path: '**',
    redirectTo: HOME,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
