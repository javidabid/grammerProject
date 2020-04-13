import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { NounsPageRoutingModule } from './nouns-routing.module';

import { NounsPage } from './nouns.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    NounsPageRoutingModule
  ],
  declarations: [NounsPage]
})
export class NounsPageModule {}
