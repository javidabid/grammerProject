import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrimaryPage } from './primary.page';

const routes: Routes = [
  {
    path: '',
    component: PrimaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrimaryPageRoutingModule {}
