import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TagquestionPageRoutingModule } from './tagquestion-routing.module';

import { TagquestionPage } from './tagquestion.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    IonicModule,
    TagquestionPageRoutingModule
  ],
  declarations: [TagquestionPage]
})
export class TagquestionPageModule {}
