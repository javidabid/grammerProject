import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { LanguagePopoverPage } from '../../../language-popover/language-popover.page';
import { PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tense',
  templateUrl: './tense.page.html',
  styleUrls: ['./tense.page.scss'],
})
export class TensePage implements OnInit {

  constructor(private location: Location, private popoverCtrl: PopoverController, private route: Router) { }

  ngOnInit() {
  }

  myBackButton() {
    this.location.back();
  }

  present() {
    this.route.navigate(['/continue-tense']);
  }

  past() {
    this.route.navigate(['/past-tense']);
  }

  future() {
    this.route.navigate(['/future-tense']);
  }

  perfect() {
    this.route.navigate(['/perfect-tense']);
  }

  async openLanguagePopover(ev) {
    const popover = await this.popoverCtrl.create({
      component: LanguagePopoverPage,
      event: ev
    });
    await popover.present();
}
}
