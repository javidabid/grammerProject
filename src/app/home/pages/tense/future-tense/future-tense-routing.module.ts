import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FutureTensePage } from './future-tense.page';

const routes: Routes = [
  {
    path: '',
    component: FutureTensePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FutureTensePageRoutingModule {}
