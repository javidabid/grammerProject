import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhoneticsPageRoutingModule } from './phonetics-routing.module';

import { PhoneticsPage } from './phonetics.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    PhoneticsPageRoutingModule
  ],
  declarations: [PhoneticsPage]
})
export class PhoneticsPageModule {}
