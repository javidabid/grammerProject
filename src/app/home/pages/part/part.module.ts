import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PartPageRoutingModule } from './part-routing.module';

import { PartPage } from './part.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    PartPageRoutingModule
  ],
  declarations: [PartPage]
})
export class PartPageModule {}
