import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdverbPage } from './adverb.page';

const routes: Routes = [
  {
    path: '',
    component: AdverbPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdverbPageRoutingModule {}
