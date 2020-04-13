import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { SimplePresentPageRoutingModule } from './simple-present-routing.module';

import { SimplePresentPage } from './simple-present.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    SimplePresentPageRoutingModule
  ],
  declarations: [SimplePresentPage]
})
export class SimplePresentPageModule {}
