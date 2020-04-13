import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SentecePageRoutingModule } from './sentece-routing.module';

import { SentecePage } from './sentece.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    SentecePageRoutingModule
  ],
  declarations: [SentecePage]
})
export class SentecePageModule {}
