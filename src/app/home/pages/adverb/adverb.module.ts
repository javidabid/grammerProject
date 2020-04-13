import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdverbPageRoutingModule } from './adverb-routing.module';

import { AdverbPage } from './adverb.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    AdverbPageRoutingModule
  ],
  declarations: [AdverbPage]
})
export class AdverbPageModule {}
