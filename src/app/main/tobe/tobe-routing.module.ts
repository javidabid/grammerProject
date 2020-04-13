import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TobePage } from './tobe.page';

const routes: Routes = [
  {
    path: '',
    component: TobePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TobePageRoutingModule {}
