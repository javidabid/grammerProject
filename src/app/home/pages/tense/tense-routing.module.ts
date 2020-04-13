import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TensePage } from './tense.page';

const routes: Routes = [
  {
    path: '',
    component: TensePage
  },
  {
    path: 'past-tense',
    loadChildren: () => import('./past-tense/past-tense.module').then( m => m.PastTensePageModule)
  },
  {
    path: 'continue-tense',
    loadChildren: () => import('./continue-tense/continue-tense.module').then( m => m.ContinueTensePageModule)
  },
  {
    path: 'perfect-tense',
    loadChildren: () => import('./perfect-tense/perfect-tense.module').then( m => m.PerfectTensePageModule)
  },
  {
    path: 'future-tense',
    loadChildren: () => import('./future-tense/future-tense.module').then( m => m.FutureTensePageModule)
  }
 
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TensePageRoutingModule {}
