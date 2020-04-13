import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntonationPageRoutingModule } from './intonation-routing.module';

import { IntonationPage } from './intonation.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    IntonationPageRoutingModule
  ],
  declarations: [IntonationPage]
})
export class IntonationPageModule {}
