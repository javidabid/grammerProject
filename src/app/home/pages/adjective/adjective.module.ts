import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdjectivePageRoutingModule } from './adjective-routing.module';

import { AdjectivePage } from './adjective.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    IonicModule,
    AdjectivePageRoutingModule
  ],
  declarations: [AdjectivePage]
})
export class AdjectivePageModule {}
