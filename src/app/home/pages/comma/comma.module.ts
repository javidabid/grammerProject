import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommaPageRoutingModule } from './comma-routing.module';

import { CommaPage } from './comma.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    CommaPageRoutingModule
  ],
  declarations: [CommaPage]
})
export class CommaPageModule {}
