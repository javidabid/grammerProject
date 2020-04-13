import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhoneticsPage } from './phonetics.page';

const routes: Routes = [
  {
    path: '',
    component: PhoneticsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhoneticsPageRoutingModule {}
