import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContinueTensePage } from './continue-tense.page';

const routes: Routes = [
  {
    path: '',
    component: ContinueTensePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContinueTensePageRoutingModule {}
