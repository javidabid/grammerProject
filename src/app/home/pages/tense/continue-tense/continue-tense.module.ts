import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContinueTensePageRoutingModule } from './continue-tense-routing.module';

import { ContinueTensePage } from './continue-tense.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContinueTensePageRoutingModule
  ],
  declarations: [ContinueTensePage]
})
export class ContinueTensePageModule {}
