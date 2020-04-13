import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { FutureTensePageRoutingModule } from './future-tense-routing.module';

import { FutureTensePage } from './future-tense.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    FutureTensePageRoutingModule
  ],
  declarations: [FutureTensePage]
})
export class FutureTensePageModule {}
