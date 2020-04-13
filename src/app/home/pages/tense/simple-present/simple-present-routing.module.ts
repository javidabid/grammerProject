import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SimplePresentPage } from './simple-present.page';

const routes: Routes = [
  {
    path: '',
    component: SimplePresentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SimplePresentPageRoutingModule {}
