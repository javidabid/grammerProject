import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { PastTensePageRoutingModule } from './past-tense-routing.module';

import { PastTensePage } from './past-tense.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PastTensePageRoutingModule,
    TranslateModule
  ],
  declarations: [PastTensePage]
})
export class PastTensePageModule {}
