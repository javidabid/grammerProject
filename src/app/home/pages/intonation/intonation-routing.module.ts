import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntonationPage } from './intonation.page';

const routes: Routes = [
  {
    path: '',
    component: IntonationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntonationPageRoutingModule {}
