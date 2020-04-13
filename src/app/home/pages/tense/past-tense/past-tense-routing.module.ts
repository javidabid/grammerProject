import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PastTensePage } from './past-tense.page';

const routes: Routes = [
  {
    path: '',
    component: PastTensePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PastTensePageRoutingModule {}
