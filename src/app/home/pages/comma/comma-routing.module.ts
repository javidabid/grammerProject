import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommaPage } from './comma.page';

const routes: Routes = [
  {
    path: '',
    component: CommaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommaPageRoutingModule {}
