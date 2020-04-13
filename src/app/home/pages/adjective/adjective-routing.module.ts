import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdjectivePage } from './adjective.page';

const routes: Routes = [
  {
    path: '',
    component: AdjectivePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdjectivePageRoutingModule {}
