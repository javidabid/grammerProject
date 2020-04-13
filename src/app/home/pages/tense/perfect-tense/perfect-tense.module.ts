import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { PerfectTensePageRoutingModule } from './perfect-tense-routing.module';

import { PerfectTensePage } from './perfect-tense.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    PerfectTensePageRoutingModule
  ],
  declarations: [PerfectTensePage]
})
export class PerfectTensePageModule {}
