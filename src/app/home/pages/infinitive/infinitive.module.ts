import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfinitivePageRoutingModule } from './infinitive-routing.module';

import { InfinitivePage } from './infinitive.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    InfinitivePageRoutingModule
  ],
  declarations: [InfinitivePage]
})
export class InfinitivePageModule {}
