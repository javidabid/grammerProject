import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GerundPage } from './gerund.page';

const routes: Routes = [
  {
    path: '',
    component: GerundPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GerundPageRoutingModule {}
