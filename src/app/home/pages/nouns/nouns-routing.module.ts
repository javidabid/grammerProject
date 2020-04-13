import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NounsPage } from './nouns.page';

const routes: Routes = [
  {
    path: '',
    component: NounsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NounsPageRoutingModule {}
