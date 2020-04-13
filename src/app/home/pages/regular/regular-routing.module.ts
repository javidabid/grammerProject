import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegularPage } from './regular.page';

const routes: Routes = [
  {
    path: '',
    component: RegularPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegularPageRoutingModule {}
