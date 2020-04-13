import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';
import { GenderPageRoutingModule } from './gender-routing.module';
import { GenderPage } from './gender.page';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    GenderPageRoutingModule
  ],
  declarations: [GenderPage]
})
export class GenderPageModule {}
