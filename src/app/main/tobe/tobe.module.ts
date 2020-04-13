import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TobePageRoutingModule } from './tobe-routing.module';

import { TobePage } from './tobe.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    TobePageRoutingModule
  ],
  declarations: [TobePage]
})
export class TobePageModule {}
