import { Component, OnInit } from '@angular/core';
import {Location } from '@angular/common';
import { LanguagePopoverPage } from '../../../../language-popover/language-popover.page';
import { PopoverController } from '@ionic/angular';


@Component({
  selector: 'app-past-tense',
  templateUrl: './past-tense.page.html',
  styleUrls: ['./past-tense.page.scss'],
})
export class PastTensePage implements OnInit {

  constructor(private location: Location, private popoverCtrl: PopoverController) { }

  ngOnInit() {
  }

  myBackButton()
  {
    this.location.back();
  }

  async openLanguagePopover(ev) {
    const popover = await this.popoverCtrl.create({
      component: LanguagePopoverPage,
      event: ev
    });
    await popover.present();

}
}