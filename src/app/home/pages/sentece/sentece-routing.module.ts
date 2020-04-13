import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SentecePage } from './sentece.page';

const routes: Routes = [
  {
    path: '',
    component: SentecePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SentecePageRoutingModule {}
