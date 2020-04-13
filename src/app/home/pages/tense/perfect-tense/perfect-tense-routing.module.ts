import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfectTensePage } from './perfect-tense.page';

const routes: Routes = [
  {
    path: '',
    component: PerfectTensePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfectTensePageRoutingModule {}
