import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegularPageRoutingModule } from './regular-routing.module';

import { RegularPage } from './regular.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    RegularPageRoutingModule
  ],
  declarations: [RegularPage]
})
export class RegularPageModule {}
