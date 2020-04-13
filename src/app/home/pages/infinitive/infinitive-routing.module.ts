import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfinitivePage } from './infinitive.page';

const routes: Routes = [
  {
    path: '',
    component: InfinitivePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfinitivePageRoutingModule {}
